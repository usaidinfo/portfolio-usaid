"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Card,
  CardBody,
  Button,
  Carousel,
} from "@material-tailwind/react";
import { ArrowLeftIcon, GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { PROJECTS } from "../projects";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = PROJECTS.find(p => p.id === params.id);
  const [showFullDesc, setShowFullDesc] = useState(false);
  
  const MAX_DESC_LENGTH = 500;
  const shouldTruncate = project?.longDesc && project.longDesc.length > MAX_DESC_LENGTH;
  const displayDesc = project?.longDesc 
    ? (shouldTruncate && !showFullDesc 
        ? project.longDesc.substring(0, MAX_DESC_LENGTH) + "..."
        : project.longDesc)
    : "";

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Typography 
          variant="h3" 
          className="mb-4"
              {...({} as React.ComponentProps<typeof Typography>)}
        >
          Project not found
        </Typography>
        <Link href="/">
          <Button 
            variant="text" 
            className="flex items-center gap-2"
              {...({} as React.ComponentProps<typeof Button>)}

          >
            <ArrowLeftIcon className="h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <Link href="/">
        <Button
          variant="text"
          className="mb-8 flex items-center gap-2"
              {...({} as React.ComponentProps<typeof Button>)}
        >
          <ArrowLeftIcon className="h-4 w-4" /> Back to Projects
        </Button>
      </Link>

      <div className="mb-12">
        <Typography
          variant="h1"
          className="mb-4 text-4xl font-bold"

              {...({} as React.ComponentProps<typeof Typography>)}

        >
          {project.title}
        </Typography>
        <div className="flex flex-wrap gap-4 mb-6">
          {project.technologies?.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <Typography
          variant="lead"
          className="text-gray-600"
              {...({} as React.ComponentProps<typeof Typography>)}

        >
          {project.duration}
        </Typography>
      </div>

      {project.images && project.images.length > 0 && (
        <Card
          className="mb-12"
              {...({} as React.ComponentProps<typeof Card>)}

        >
          <CardBody
            className="p-0"
              {...({} as React.ComponentProps<typeof CardBody>)}

          >
            <Carousel
              className="rounded-xl bg-gray-200"
              autoplay
              loop
              {...({} as React.ComponentProps<typeof Carousel>)}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i
                          ? "w-8 bg-gray-900"
                          : "w-4 bg-gray-400"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {project.images.map((image, idx) => (
                <div key={idx} className="relative h-[600px]">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    className="object-contain"
                    fill
                  />
                </div>
              ))}
            </Carousel>
          </CardBody>
        </Card>
      )}

      <Card
        className="mb-12"
              {...({} as React.ComponentProps<typeof Card>)}

      >
        <CardBody
              {...({} as React.ComponentProps<typeof CardBody>)}

        >
          <Typography
            variant="h4"
            className="mb-4"
              {...({} as React.ComponentProps<typeof Typography>)}

          >
            Project Overview
          </Typography>
          <Typography
            className="text-gray-600 whitespace-pre-line"
              {...({} as React.ComponentProps<typeof Typography>)}

          >
            {displayDesc}
          </Typography>
          {shouldTruncate && (
            <Button
              variant="text"
              className="mt-4 p-0 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setShowFullDesc(!showFullDesc)}
              {...({} as React.ComponentProps<typeof Button>)}
            >
              {showFullDesc ? "Show Less" : "Show More"}
            </Button>
          )}
        </CardBody>
      </Card>

      <div className="flex gap-4">
        {project.demoLink && (
          <Button
            className="flex items-center gap-2"
            // @ts-ignore
            onClick={()=> (window.location.href = project.demoLink)}
              {...({} as React.ComponentProps<typeof Button>)}

          >
            <GlobeAltIcon className="h-4 w-4" /> Live Demo
          </Button>
        )}
        {project.githubLink && (
          <Button
            variant="outlined"
            className="flex items-center gap-2"
            // @ts-ignore
            onClick={()=> (window.location.href = project.githubLink)}
              {...({} as React.ComponentProps<typeof Button>)}

          >
            <CodeBracketIcon className="h-4 w-4" /> View Code
          </Button>
        )}
      </div>
    </div>
  );
}
