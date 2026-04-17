import React from "react";
import { Check, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for students and hobbyists exploring AI coding.",
      features: [
        "500 AI Generations / mo",
        "Standard Support",
        "Access to 5 Languages",
        "VS Code Extension",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "Advanced features for professional developers.",
      features: [
        "Unlimited Generations",
        "Priority Neural Processing",
        "Custom AI Training",
        "Advanced Debugging Tools",
        "Team Workspace (up to 3)",
      ],
      buttonText: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "99",
      description: "Full-scale solutions for large teams and agencies.",
      features: [
        "Self-Hosted Options",
        "Dedicated Support",
        "SSO & Security Audit",
        "Unlimited Team Members",
        "Custom API Access",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Pricing Plans
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Scale your productivity.
          </p>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose a plan that fits your workflow. From solo developers to
            global enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? "bg-slate-900 border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 z-10"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest">
                  <Zap size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm h-10">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ/Note */}
        <p className="text-center text-slate-500 mt-12 text-sm">
          All plans include 14-day free trial. No credit card required for
          Starter plan.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
