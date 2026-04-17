import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Senior Frontend Lead",
      company: "TechFlow",
      content: "AiCody has completely changed how our team handles PRs. The AI logic suggestions are eerily accurate to our internal design system.",
      avatar: "https://i.pravatar.cc/150?u=alex",
    },
    {
      name: "Sarah Chen",
      role: "Fullstack Developer",
      company: "Stripe",
      content: "As someone who deals with complex TypeScript types, this tool is a lifesaver. It catches edge cases I usually miss during manual debugging.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Jordan Smith",
      role: "CTO",
      company: "Venturely",
      content: "We reduced our development sprint time by 30% in the first month. The enterprise security features gave our legal team peace of mind.",
      avatar: "https://i.pravatar.cc/150?u=jordan",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Wall of Love
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white">
            Built by developers, <br />
            <span className="text-slate-400">trusted by the community.</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-500/20"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;