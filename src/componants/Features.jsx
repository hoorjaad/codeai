import React from "react";
import { Cpu, ShieldCheck, Zap, Globe, Layers, Terminal } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI Pair Programming",
      description:
        "Our neural engine suggests entire functions based on your coding style and project context.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Instant Debugging",
      description:
        "Identify bottlenecks and logic errors in real-time with automated fix suggestions.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Enterprise Security",
      description:
        "Your code stays yours. We use end-to-end encryption and local-first processing options.",
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Universal Integration",
      description:
        "Seamlessly connects with VS Code, JetBrains, and your favorite terminal workflows.",
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Multi-Language Support",
      description:
        "Optimized for React, TypeScript, Python, Rust, and 20+ other modern languages.",
      icon: <Layers className="w-6 h-6 text-pink-400" />,
    },
    {
      title: "Global Collaboration",
      description:
        "Sync your team's custom AI patterns across the globe with zero-latency updates.",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Powerful Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Everything you need to ship <br className="hidden sm:block" />
            <span className="text-slate-400">
              production-ready code faster.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-poppins text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent -z-10" />
    </section>
  );
};

export default Features;
