"use client";
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:pr-12">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-6 lg:text-5xl !leading-tight text-3xl font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Transforming Ideas into{" "}
            <span className="text-black">Digital Reality</span>
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 !text-gray-600 md:pr-16 xl:pr-28 text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            I&apos;m Usaid Mustafa, a passionate Frontend Developer specializing
            in React, Next.js, and modern web technologies. With expertise in
            creating intuitive user experiences and scalable applications, I
            bring creative solutions to complex problems.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-3 text-gray-900 font-semibold uppercase tracking-wide"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Let&apos;s connect
            </Typography>
            <form onSubmit={handleSubmit} className="relative">
              <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                <Input
                  type="email"
                  color="gray"
                  label="Enter your email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  crossOrigin={undefined}
                  className="flex-grow"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <Button
                  type="submit"
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                  disabled={loading}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {loading ? "Subscribing..." : "Get Updates"}
                </Button>
              </div>
              {status === "success" && (
                <Typography
                  className="mt-2 text-sm text-green-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Thanks for subscribing! You&apos;ll receive updates soon.
                </Typography>
              )}
              {status === "error" && (
                <Typography
                  className="mt-2 text-sm text-red-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Failed to subscribe. Please try again.
                </Typography>
              )}
            </form>
          </div>
          <div className="mt-6">
            <Typography
              variant="small"
              className="font-normal !text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Technologies I work with:{" "}
              <span className="font-medium text-gray-700 space-x-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "React Native",
                  "Flutter",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-gray-100 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </span>
            </Typography>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Developer Workspace"
          src="/image/developers-workspace.jpg"
          className="h-[36rem] w-full rounded-2xl object-cover shadow-xl border-8 border-white"
          priority
        />
      </div>
    </header>
  );
}

export default Hero;