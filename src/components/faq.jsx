import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What file formats are supported?", answer: "We support multiple file formats including PDF, DOCX, TXT, and more." },
  { question: "What languages are supported?", answer: "Our service supports multiple languages including English, Spanish, French, and more." },
  { question: "How accurate are the translations?", answer: "We use state-of-the-art AI models to provide high accuracy, but results may vary." },
  { question: "What are the file size limits?", answer: "The maximum file size limit is 50MB per upload." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800 rounded-lg p-4 w-full">
            <button
              className="flex justify-between w-full text-left font-semibold text-gray-300 hover:text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown className={`transition-transform text-gray-400 ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
            </button>
            {openIndex === index && <p className="mt-2 text-gray-400">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
