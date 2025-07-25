import { Typography, Button } from "@material-tailwind/react";

const LINKS = [""];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography
            className="text-center font-normal !text-gray-700"
              {...({} as React.ComponentProps<typeof Typography>)}

          >
            &copy; {CURRENT_YEAR} Made
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Usaid Mustafa
            </a>
            .
            All rights reserved.
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              {...({} as React.ComponentProps<typeof Typography>)}

                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
