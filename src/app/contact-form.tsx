"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "Design",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interest: "Design",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          {...({} as React.ComponentProps<typeof Typography>)}
        >
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
          {...({} as React.ComponentProps<typeof Typography>)}
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card
          shadow={true}
          className="container mx-auto border border-gray/50"
          {...({} as React.ComponentProps<typeof Card>)}
        >
          <CardBody
            className="grid grid-cols-1 lg:grid-cols-7 md:gap-10"
            {...({} as React.ComponentProps<typeof CardBody>)}
          >
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography
                variant="h4"
                color="white"
                className="mb-2"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  +91 8103641119
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  m.41usaid@gmail.com
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <Link href="https://www.linkedin.com/in/usaid-mustafa-749393315" target="_blank">
                  <IconButton variant="text" color="white" {...({} as React.ComponentProps<typeof IconButton>)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </IconButton>
                </Link>

                <Link href="https://github.com/musaid1234" target="_blank">
                  <IconButton variant="text" color="white" {...({} as React.ComponentProps<typeof IconButton>)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </IconButton>
                </Link>

                <Link href="https://wa.me/918103641119" target="_blank">
                  <IconButton variant="text" color="white" {...({} as React.ComponentProps<typeof IconButton>)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </IconButton>
                </Link>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="eg. Daud"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                    {...({} as React.ComponentProps<typeof Input>)}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="eg. Hamesworth"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    {...({} as React.ComponentProps<typeof Input>)}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg. daud@gmail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  {...({} as React.ComponentProps<typeof Input>)}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                  {...({} as React.ComponentProps<typeof Typography>)}
                >
                  What are you interested in?
                </Typography>
                <div className="-ml-3 mb-14">
                  {["Design", "Development", "Support", "Other"].map((type) => (
                    <Radio
                      key={type}
                      color="gray"
                      name="interest"
                      label={type}
                      checked={formData.interest === type}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, interest: type }))
                      }
                      {...({} as React.ComponentProps<typeof Radio>)}
                    />
                  ))}
                </div>
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  {...({} as React.ComponentProps<typeof Textarea>)}
                />
                <div className="w-full flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="w-full md:w-fit ml-auto"
                    color="gray"
                    size="md"
                    disabled={loading}
                    {...({} as React.ComponentProps<typeof Button>)}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                  {status === "success" && (
                    <Typography
                      className="text-green-500 text-center"
                      {...({} as React.ComponentProps<typeof Typography>)}
                    >
                      Message sent successfully!
                    </Typography>
                  )}
                  {status === "error" && (
                    <Typography
                      className="text-red-500 text-center"
                      {...({} as React.ComponentProps<typeof Typography>)}
                    >
                      Failed to send message. Please try again.
                    </Typography>
                  )}
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;