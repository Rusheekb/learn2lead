'use client';

import { Book, Brain, GraduationCap, LineChart, Users, School } from 'lucide-react';
import { Button } from '../ui/button';

const features = [
  {
    name: 'Personalized Learning',
    description: 'Customized study plans tailored to your unique learning style and goals.',
    icon: Brain,
  },
  {
    name: 'Expert Tutors',
    description: 'Learn from experienced educators with proven track records of student success.',
    icon: School,
  },
  {
    name: 'Comprehensive Subjects',
    description: 'Coverage of all major academic subjects and test preparation materials.',
    icon: Book,
  },
  {
    name: 'Progress Tracking',
    description: 'Regular assessments and detailed progress reports to monitor your growth.',
    icon: LineChart,
  },
  {
    name: 'Small Group Sessions',
    description: 'Interactive group learning environments that foster collaboration.',
    icon: Users,
  },
  {
    name: 'College Prep',
    description: 'Specialized programs for college admissions and standardized tests.',
    icon: GraduationCap,
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive Learning Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to excel in your academic journey
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" className="text-lg">
              Explore All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 