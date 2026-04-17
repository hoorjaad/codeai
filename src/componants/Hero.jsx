import React from "react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Dashboard from "../assets/dashboard.png";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300 font-medium tracking-wide">
              Revolutionizing AI-Driven Development
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Code Smarter with</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-500">
              Intelligence in Every Line
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            AiCody empowers developers to build, debug, and deploy faster using
            advanced neural patterns. Stop searching documentation and start
            building your vision today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20">
              Get Started for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Code2 className="w-4 h-4" />
              View Documentation
            </button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-20" />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-2 backdrop-blur-md shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video flex items-center justify-center">
                <div className="text-slate-700 flex flex-col items-center">
                  <img src={Dashboard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
