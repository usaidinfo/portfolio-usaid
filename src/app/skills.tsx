"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  PencilSquareIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

interface SkillItem {
  icon: React.ElementType;
  title: string;
  children: string;
  tech?: string[];
}

const SKILLS: SkillItem[] = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    children:
      "Crafting responsive and performant web applications using modern frameworks and best practices. Specializing in React.js and Next.js for building scalable solutions.",
    tech: ["React.js", "Next.js", "TypeScript", "Redux"]
  },
  {
    icon: CommandLineIcon,
    title: "Mobile Development",
    children:
      "Building cross-platform mobile applications with React Native and Expo. Creating seamless mobile experiences that work flawlessly across iOS and Android devices.",
    tech: ["React Native", "Expo", "Mobile UI/UX"]
  },
  {
    icon: PencilSquareIcon,
    title: "UI/UX Design",
    children:
      "Creating intuitive user interfaces with tools like Figma and Canva. Translating design concepts into pixel-perfect implementations using modern CSS frameworks.",
    tech: ["Figma", "Canva", "Tailwind CSS", "Material UI"]
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO Optimization",
    children:
      "Implementing SEO best practices to improve website visibility and search engine rankings. Focus on performance optimization and semantic HTML structure.",
    tech: ["Technical SEO", "Meta Tags", "Schema Markup"]
  },
  {
    icon: BeakerIcon,
    title: "Testing & Quality",
    children:
      "Ensuring application reliability through comprehensive testing strategies. Implementing unit tests, integration tests, and end-to-end testing for robust applications.",
    tech: ["Jest", "React Testing Library", "Cypress"]
  },
  {
    icon: CpuChipIcon,
    title: "Database Management",
    children: 
      "Handling data effectively with both SQL and NoSQL databases. Experienced in designing schemas, writing queries, and optimizing database performance",
    tech: ["MongoDB", "MySQL", "REST APIs"]
 },
];

export function Skills() {
  return (
    <section className="px-8 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto mb-24 text-center">
        <Typography 
          color="blue-gray" 
          className="mb-4 font-bold uppercase tracking-widest text-sm text-gray-600"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Technical Capabilities
        </Typography>
        <Typography 
          variant="h1" 
          color="blue-gray" 
          className="mb-6 text-4xl lg:text-5xl font-bold tracking-tight"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Expertise in Modern Development
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-600 lg:w-7/12 text-lg leading-relaxed"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Combining cutting-edge technologies with user-centric design to build 
          scalable digital solutions that deliver measurable results.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <div 
            key={idx} 
            className="group relative h-full flex flex-col"
          >
            <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-200">
              <SkillCard {...props} />
              
              {props.tech && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {props.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full transition-colors group-hover:bg-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;