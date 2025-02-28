"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  technologies?: Array<{ name: string; color?: string }>;
}

export function ProjectCard({ img, title, desc, technologies }: ProjectCardProps) {
  return (
    <Card 
      className="w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        floated={false}
        className="relative h-48 rounded-t-xl overflow-hidden"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
        />
      </CardHeader>
      <CardBody 
        className="p-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-3 font-bold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography 
          className="mb-4 font-normal text-gray-600"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {desc}
        </Typography>
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 `}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
        <Button 
          variant="text" 
          color="gray" 
          className="flex items-center gap-2 pl-0 hover:pl-2 transition-all"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardBody>
    </Card>
  );
}