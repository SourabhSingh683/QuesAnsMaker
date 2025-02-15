import React from "react";
import { Upload, Languages, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Upload className="w-12 h-12 text-blue-400" />,
      title: "Upload PDF",
      description: "Drag and drop your PDF document or click to upload.",
    },
    {
      number: "2",
      icon: <Languages className="w-12 h-12 text-blue-400" />,
      title: "Select Language",
      description: "Choose your preferred language for Q&A generation.",
    },
    {
      number: "3",
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Get Results",
      description: "Receive instant Q&A content generated from your PDF.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your PDF documents into Q&A content in three simple steps.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gray-900 p-8 rounded-lg border border-blue-500/30 flex flex-col items-center text-center shadow-lg shadow-blue-500/50 hover:shadow-blue-500 transition-all"
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4">{step.icon}</div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Step Connecting Lines (Visible on md+ screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/30 -translate-y-1/2 -z-10" />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-transform hover:scale-105 font-medium shadow-md shadow-blue-500/50">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
