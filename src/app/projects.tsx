"use client";
import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import Link from "next/link";
import { useState } from "react";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  id: string;
  img: string;
  title: string;
  desc: string;
  longDesc?: string;
  technologies?: Technology[];
  images?: ProjectImage[];
  demoLink?: string;
  githubLink?: string;
  duration?: string;
  category: "web" | "mobile" | "fullstack" | "ai";
}

export const PROJECTS: Project[] = [
  {
    id: "leaf-ai-platform",
    img: "/image/blog3.svg",
    title: "Sensor Management Platform",
    desc: "A comprehensive IoT platform for managing and monitoring environmental sensors with real-time data visualization and AI-powered insights.",
    longDesc: "Leading the frontend development of a sophisticated sensor management platform that handles real-time data from environmental sensors. The platform features interactive dashboards, real-time monitoring, and AI-powered analytics for environmental data interpretation.",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Material UI", color: "purple" },
      { name: "WebSocket", color: "green" },
      { name: "Redux", color: "purple" }
    ],
    category: "ai",
    duration: "Feb 2024 - Present",
    images: [
      { url: "/image/blog3.svg", alt: "LeafAI Dashboard" },
      { url: "/image/blog2.svg", alt: "Sensor Analytics" }
    ],
  },
  {
    id: "task-management",
    img: "/image/blog-1.svg",
    title: "Task Management Platform",
    desc: "A comprehensive task management solution similar to Jira and ClickUp using React and Material UI, built with the MERN stack.",
    longDesc: "Built a full-featured task management platform that allows teams to organize and track their projects efficiently. Includes features like drag-and-drop task organization, real-time updates, and team collaboration tools.",
    technologies: [
      { name: "MongoDB", color: "green" },
      { name: "Express.js", color: "green" },
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" }
    ],
    category: "fullstack",
    duration: "Oct 2024 - Present",
    images: [
      { url: "/image/blog3.svg", alt: "LeafAI Dashboard" },
      { url: "/image/blog2.svg", alt: "Sensor Analytics" }
    ],
  },
  {
    id: "time-monitoring",
    img: "/image/blog2.svg",
    title: "Time Monitoring Application",
    desc: "An enterprise time tracking solution with both web and mobile interfaces for comprehensive time management.",
    longDesc: "Developed a time monitoring application at Infomover Technologies that helps track user activity and time allocation. The solution includes both web and mobile interfaces for maximum accessibility.",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "React Native", color: "blue" },
      { name: "Java Backend", color: "red" },
      { name: "UI Libraries", color: "purple" }
    ],
    category: "mobile",
    duration: "Feb 2024 - Present",
    images: [
      { url: "/image/blog3.svg", alt: "LeafAI Dashboard" },
      { url: "/image/blog2.svg", alt: "Sensor Analytics" }
    ],
  },
  // Add more projects as needed
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => 
        project.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <section className="py-28 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          variant="h2" 
          color="blue-gray" 
          className="mb-4 text-4xl font-bold tracking-tight"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12 text-lg"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Showcasing my journey through various technologies and solutions. 
          Each project represents a unique challenge and innovative solution.
        </Typography>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {["All", "Web", "Mobile", "Fullstack", "AI"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all
                border ${
                  activeCategory === category 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group relative h-full">
            <Link href={`/${project.id}`} className="block h-full">
              <div className="h-full transform transition-all duration-300 hover:-translate-y-2">
                <ProjectCard {...project} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}