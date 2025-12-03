import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export function useSocket(){
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();


    useEffect(()=> {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NWNiOWY0ZC0xNGVlLTRlYmMtOTUxMi1jYTkxZGMyMGJiYmIiLCJpYXQiOjE3NjM5OTAzMDd9.lpuTC4mHL-AxvtcMYPN1EAGwzu61EJxxfis3itrjhpo`)
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])

    return {
        loading,
        socket
    }
}