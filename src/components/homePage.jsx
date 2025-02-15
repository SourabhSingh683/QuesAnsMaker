import React, { useState } from "react";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import QAResults from "./qaResults"; // Import QAResults

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [generatedQA, setGeneratedQA] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const generateQA = () => {
    if (!selectedFile) {
      alert("Please upload a PDF file first.");
      return;
    }
    setGeneratedQA([
      { question: "What is the main topic of the document?", answer: "The document discusses AI advancements." },
      { question: "Who is the author of this document?", answer: "The author is John Doe." },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Navbar />
      
      <motion.main
        className="max-w-4xl mx-auto px-4 pt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform PDFs into{" "}
          <span className="block text-blue-400 mt-2">Multilingual Q&A</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Upload your PDF and get instant questions & answers in multiple languages
        </motion.p>

        {/* Upload Box */}
        <motion.div
          className="border-2 border-dashed border-gray-600 rounded-lg p-12 mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300 mb-4">Drag and drop your PDF here, or</p>
          <label className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors cursor-pointer">
            Choose File
            <input type="file" className="hidden" accept="application/pdf" onChange={handleFileUpload} />
          </label>
          <p className="text-gray-500 text-sm mt-4">Supported format: PDF only</p>
          {selectedFile && <p className="text-green-400 mt-2">Uploaded: {selectedFile.name}</p>}
        </motion.div>

        {/* Language & Generate Button */}
        <div className="flex justify-center gap-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <select
              className="bg-gray-800 text-white px-6 py-2 rounded-md appearance-none pr-10 border border-gray-700 hover:border-gray-600 transition-colors"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>

          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md transition-colors"
            onClick={generateQA}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Generate Q&A
          </motion.button>
        </div>

        {/* Generated Q&A Section */}
        {generatedQA.length > 0 && (
          <motion.div
            className="mt-12 bg-gray-800 p-6 rounded-lg text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Generated Q&A</h2>
            {generatedQA.map((item, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <p className="font-semibold text-blue-400">Q: {item.question}</p>
                <p className="text-gray-300">A: {item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* QAResults Section - Display only when generatedQA is available */}
        {generatedQA.length > 0 && <QAResults qaData={generatedQA} />}
      </motion.main>
    </div>
  );
};

export default HomePage;
