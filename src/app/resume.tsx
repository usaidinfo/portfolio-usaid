"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CommandLineIcon,
  ArrowDownTrayIcon,
  LanguageIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Children } from "react";

const EDUCATION_ITEMS = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Computer Application",
    period: "Aug 2023 - Aug 2026",
    institution: "Barkatullah University",
    children:
      "Currently pursuing BCA with focus on computer science fundamentals and practical programming skills.",
  },
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Business Administration (Distance)",
    period: "Oct 2023 - Oct 2026",
    institution: "Jamia Millia Islamia, New Delhi",
    children:
      "Pursuing BBA to complement technical skills with business acumen.",
  },
];

const EXPERIENCE_ITEMS = [
  {
    icon: CommandLineIcon,
    title: "Freelance Frontend Developer ",
    period: "Sep 2023 - Present",
    children: [
      "Developed a job posting platform with multiple homepages and advanced features using Bootstrapand Redux",
      "Built an e-commerce platform with cart functionalities and animations for a seamless shopping experience.",
      "Created an event booking mobile app in React Native for discovering and booking nearby shows and live events.",
      "A comprehensive real-time Step Counter App using React Native and Expo with using Expo sensors for pedometers and accelerometer and birometer."
    ],
  },
  {
    icon: BriefcaseIcon,
    title: "Frontend Developer",
    company: "Infomover Technologies",
    period: "Feb 2024 - Jan 2025",
    children: [
      "Developed a time monitoring application using Next.js and UI component libraries",
      "Created a mobile app using React Native for the time monitoring application",
      "Designed marketing website using Next.js for software product showcase",
      "Focus on delivering intuitive and engaging user experiences",
    ],
  },
  {
    icon: BriefcaseIcon,
    title: "Fronend Developer",
    company: "Leaf AI",
    period: "Dec 2024 - Present",
    children: [
      "Developed a sensor management platform using Next.js",
      "Utilised Material UI for components like widgets and charts",
      "For styling using Tailwind CSS"
    ]
  }
];

const SKILLS_ITEMS = [
  {
    icon: CommandLineIcon,
    title: "Technical Skills",
    children:
      "HTML, CSS, JS, TS, React.js, Next.js, Tailwind, Bootstrap, Material UI, shadcn UI, Flutter, React Native, Dart, Github, BitBucket, MongoDB, SQL, Express, Rest API, React Query, JQuery, Redux, Zustand",
  },
  {
    icon: SparklesIcon,
    title: "Additional Skills",
    children:
      "Team Work, Creativity, Analytical Thinking, Problem-Solving, Time Management",
  },
  {
    icon: LanguageIcon,
    title: "Languages",
    children: "English, Hindi, German",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3 font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            My Experience
          </Typography>
          <Typography
            className="font-normal text-gray-500 lg:w-2/3 mx-auto"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            With hands-on experience in modern web technologies and a passion
            for creating exceptional user experiences, I bring ideas to life
            through clean, efficient code.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Experience */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {/* Professional Experience */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Work Experience
                  </Typography>
                </div>

                <div className="space-y-8">
                  {EXPERIENCE_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative pl-8 border-l-2 border-gray-200"
                    >
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {item.title}
                      </Typography>
                      {item.company && (
                        <Typography
                          className="mb-2 text-blue-gray-800"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {item.company}
                        </Typography>
                      )}
                      <Typography
                        variant="small"
                        className="mb-4 text-gray-600 font-semibold"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {item.period}
                      </Typography>
                      <div className="space-y-2">
                        {Array.isArray(item.children) ? (
                          item.children.map((point, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="text-blue-500 font-bold">•</span>
                              <Typography
                                className="text-gray-700"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              >
                                {point}
                              </Typography>
                            </div>
                          ))
                        ) : (
                          <Typography
                            className="text-gray-700"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {item.children}
                          </Typography>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="lg:col-span-4 space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <AcademicCapIcon className="h-8 w-8 text-blue-500" />
                <Typography
                  variant="h4"
                  color="blue-gray"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Education
                </Typography>
              </div>

              <div className="space-y-6">
                {EDUCATION_ITEMS.map((item, idx) => (
                  <div key={idx}>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="text-gray-700 mb-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {item.institution}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-gray-600 mb-2"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      className="text-gray-600 text-sm"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {item.children}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              {SKILLS_ITEMS.map((item, idx) => (
                <div key={idx} className="mb-8">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 flex items-center gap-2"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <item.icon className="h-5 w-5 text-blue-500" />
                    {item.title}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {item.children.split(", ").map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <Button
              size="lg"
              color="blue-gray"
              className="flex items-center gap-3 mt-8"
              onClick={() => window.open("/Usaid CV.pdf", "_blank")}
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Download CV
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
