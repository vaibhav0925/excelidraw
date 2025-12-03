import express from "express"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "@repo/backend-common/config" 
import { middleware } from "./middleware"
import {CreateUserSchema, SignInSchema, CreateRoomSchema} from "@repo/common/types"
import {prismaClient} from "@repo/db/client"


const app = express()


app.use(express.json());


app.post("/signup", async (req, res) => {
    
    const parsedData = CreateUserSchema.safeParse(req.body)
    if(!parsedData.success){
        console.log(parsedData.error);
        res.json({
            messages: "Incorrect Input"
        });
        return;
    }
    try{
        const user = await prismaClient.user.create({
            data:{
                email: parsedData.data?.email,
                // To dO Hash the password
                password: parsedData.data?.password,
                name: parsedData.data?.name
            }
        })
        res.json({
            userId: user.id
        })
    }catch(e){
        res.status(401).json({
            message: "User Already Exist With this username"
        })
    }
    
})

app.post("/signin", async (req, res) => {
    const parsedData = SignInSchema.safeParse(req.body)
    if(!parsedData.success){
        console.log(parsedData.error);
        res.json({
            messages: "Incorrect Input"
        })
        return;
    }

    // TODO: Compare the Hash Password here
    const user = await prismaClient.user.findFirst({
        where:{
            email: parsedData.data.email,
            password: parsedData.data.password
        }
    })

    if(!user){
        res.status(403).json({
            "message": "Not Authorized"
        })
        return;
    }

    const token = jwt.sign({
        userId: user?.id
    }, JWT_SECRET)

    res.json({
        token
    })
})


app.post("/room", middleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body)
    if(!parsedData.success){
        console.log(parsedData.error);
        return res.json({
            messages: "Incorrect Input"
        })
    }
    // @ts-ignore
    const userId = req.userId
    
    try{
        const room = await prismaClient.room.create({
        data: {
            slug: parsedData.data.name,
            admin: {
                connect: {
                    id:userId
                }
            }
        }
        })

        res.json({
            roomId: room.id
        })
    }catch(e){
        console.error(e);
        res.status(403).json({
            message: "Room Already Exist with this name or other error"
        })
    }
    
})


app.get("/chats/:roomId", async (req, res) =>{
    try{
        const roomId = Number(req.params.roomId);
        const message = await prismaClient.chat.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 50
        })
        res.json({
            message
        });
    }catch(e){
        res.status(500).json({
            error: "Something went wrong" 

        })
    }
});

app.get("/room/:slug", async (req, res) =>{
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    })

    res.json({
        room
    })
})


app.listen(3001);