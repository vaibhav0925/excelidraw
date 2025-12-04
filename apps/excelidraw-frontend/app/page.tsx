import Image from "next/image";
import { Pencil, Users, Zap, Download, Globe, Lock, Github, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pencil className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">ExceliDraw</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#github" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
            <a href="/signup" className="bg-red-500 px-5 py-2 rounded-lg text-white hover:text-gray-900 transition-colors">Sign Up</a>
            <a href="/signin" className="bg-red-500 px-5 py-2 rounded-lg text-white hover:text-gray-900 transition-colors">Sign In</a>
            <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Free & Open Source</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Sketch, Collaborate,
              <br />
              <span className="text-emerald-600">Create Together</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              A powerful, intuitive whiteboard tool for sketching diagrams, wireframes, and ideas.
              Simple enough for everyone, powerful enough for professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all hover:shadow-xl flex items-center gap-2 text-lg font-medium">
                Start Drawing Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2 text-lg font-medium">
                <Github className="w-5 h-5" />
                View on GitHub
              </button>
            </div>

            <div className="w-full max-w-5xl bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-2xl p-8 border border-emerald-100">
              <div className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-block bg-emerald-100 p-6 rounded-full">
                    <Pencil className="w-16 h-16 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-500 text-lg">Canvas Preview Area</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-gray-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Everything you need to create
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features wrapped in a simple, intuitive interface
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Pencil className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intuitive Drawing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create diagrams, wireframes, and sketches with an easy-to-use drawing interface.
                  No learning curve required.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-time Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work together with your team in real-time. See changes instantly as they happen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-amber-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized performance ensures smooth drawing even with complex diagrams. No lag, no delays.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Anywhere</h3>
                <p className="text-gray-600 leading-relaxed">
                  Export your creations as PNG, SVG, or clipboard. Share your work however you need.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-rose-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Works Everywhere</h3>
                <p className="text-gray-600 leading-relaxed">
                  Web-based solution works on any device. No installation needed, just open and start creating.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Privacy First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data stays yours. End-to-end encryption ensures your drawings remain private and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start creating?
            </h2>
            <p className="text-xl mb-12 text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators, designers, and teams who trust ExceliDraw
              for their visual collaboration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all hover:shadow-xl flex items-center justify-center gap-2 text-lg font-medium">
                Launch ExceliDraw
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg font-medium">
                <Github className="w-5 h-5" />
                Star on GitHub
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Pencil className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">ExceliDraw</span>
              </div>
              <p className="text-sm">
                Built with passion for creators everywhere. Open source and free forever.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
