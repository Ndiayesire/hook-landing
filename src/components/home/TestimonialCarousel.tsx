import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonial from '../common/Testimonial';

const testimonials = [
  {
    quote: "HookTXT has transformed our customer service. We've reduced response times by 65% while improving customer satisfaction scores.",
    author: "Sarah J.",
    position: "VP of Customer Experience",
    company: ""
  },
  {
    quote: "The ChatInsight analytics have given us a whole new perspective on customer interactions. We're now making data-driven decisions that deliver real results.",
    author: "Michael R.",
    position: "Director of Marketing",
    company: ""
  },
  {
    quote: "Implementing HookTXT's conversational AI platform was seamless. Their team provided exceptional support throughout the entire process.",
    author: "Jennifer L.",
    position: "CTO",
    company: ""
  },
  {
    quote: "We've seen a 40% increase in qualified leads since implementing HookTXT. The hybrid AI + human approach makes all the difference.",
    author: "David W.",
    position: "Sales Director",
    company: ""
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex justify-between mt-6">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;