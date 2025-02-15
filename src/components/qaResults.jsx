import React, { useState } from "react";
import { ChevronDown, ChevronUp, Download, Loader } from "lucide-react";

const QAResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const qaData = [
    {
      id: 1,
      question: "What are the key benefits of the system?",
      answer: {
        title: "System Benefits",
        content:
          "The system provides automated question generation, multilingual support, and easy PDF processing capabilities.",
      },
    },
    {
      id: 2,
      question: "How does the multilingual support work?",
      answer: {
        title: "Multilingual Support",
        content:
          "The system uses advanced NLP and translation tools to generate content in multiple languages accurately.",
      },
    },
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestionId(selectedQuestionId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] text-white py-16 px-8 md:px-16 lg:px-32">
      {/* Loading State */}
      {isLoading && (
        <div className="bg-blue-900 rounded-lg p-4 mb-8 flex items-center gap-2 w-fit">
          <Loader className="w-4 h-4 text-blue-400 animate-spin" />
          <span className="text-blue-300">Processing your document...</span>
        </div>
      )}

      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Generated Q&A Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Questions Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Generated Questions
          </h3>
          <div className="space-y-4">
            {qaData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-full"
              >
                <button
                  onClick={() => handleQuestionClick(item.id)}
                  className={`w-full p-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors ${
                    selectedQuestionId === item.id ? "bg-blue-900" : ""
                  }`}
                >
                  <span className="font-medium">{item.question}</span>
                  {selectedQuestionId === item.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Answers Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Generated Answers
          </h3>
          <div className="space-y-4 w-full">
            {selectedQuestionId ? (
              <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 w-full">
                <h4 className="font-medium text-lg text-white mb-2">
                  {qaData.find((item) => item.id === selectedQuestionId)?.answer
                    .title}
                </h4>
                <p className="text-gray-300">
                  {
                    qaData.find((item) => item.id === selectedQuestionId)?.answer
                      .content
                  }
                </p>
              </div>
            ) : (
              <div className="bg-gray-700 rounded-lg p-8 text-center text-gray-400 w-full">
                Select a question to view its answer
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-12 w-full">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md">
          <Download className="w-5 h-5" />
          Download Results
        </button>
      </div>
    </div>
  );
};

export default QAResults;
