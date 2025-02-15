import React, { useState } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Research Analyst",
      initial: "A",
      rating: 5,
      testimonial:
        "The multilingual support is exceptional. It has dramatically improved our document analysis workflow across international teams.",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Education Consultant",
      initial: "M",
      rating: 5,
      testimonial:
        "Perfect for creating study materials in multiple languages. The Q&A generation saves hours of manual work.",
    },
    {
      id: 3,
      name: "Jean Pierre",
      role: "Content Manager",
      initial: "J",
      rating: 5,
      testimonial:
        "The accuracy of generated questions and translations is impressive. A game-changer for our multilingual content strategy.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0d0d0d] text-gray-300 py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        What Our Users Say
      </h2>

      <div className="w-full px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-300">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
