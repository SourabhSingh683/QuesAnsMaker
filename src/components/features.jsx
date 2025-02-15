import React from "react";
import { FileText, Languages, HelpCircle, Download, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: "PDF Processing",
      description: "Upload any PDF document and get instant analysis with advanced text extraction.",
    },
    {
      icon: <Languages className="w-8 h-8 text-blue-400" />,
      title: "Multilingual Support",
      description: "Generate Q&A content in multiple languages with accurate translations.",
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-400" />,
      title: "Smart Q&A Generation",
      description: "AI-powered question and answer generation from your document content.",
    },
    {
      icon: <Download className="w-8 h-8 text-blue-400" />,
      title: "Easy Export",
      description: "Download generated Q&A content in your preferred format and language.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Secure Processing",
      description: "Your documents are processed securely and privately.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Instant Results",
      description: "Get your Q&A content generated in seconds with real-time processing.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your PDF documents into interactive Q&A content in multiple languages.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg transition-transform 
              hover:scale-105 hover:shadow-xl group overflow-hidden"
            >
              {/* Blue Lightning Animation */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 
              transition-opacity duration-300 blur-2xl"></div>

              <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 
              group-hover:animate-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>

              {/* Lightning Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent 
              opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
