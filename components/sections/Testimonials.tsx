'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'High School Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'Learn2Lead helped me improve my SAT scores by over 200 points! The personalized attention and study strategies were exactly what I needed.',
  },
  {
    name: 'Michael Chen',
    role: 'College Freshman',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5',
    quote: 'The tutors here are amazing! They helped me ace my AP exams and get into my dream college. I could not have done it without them.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'My daughter\'s confidence in math has skyrocketed since starting with Learn2Lead. The progress tracking helps us see her improvement week by week.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Success stories from our community of learners
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 