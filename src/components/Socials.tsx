import { EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "./svgs/Icons";

const socials = [
  {
    href: "mailto:sc111@rice.edu",
    tooltip: "sc111@rice.edu",
    title: "Email",
    icon: <EmailIcon />,
  },
  {
    href: "https://github.com/stvnchng",
    tooltip: "@stvnchng",
    title: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://linkedin.com/in/stvnchng",
    tooltip: "/in/stvnchng",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://drive.google.com/file/d/1wH1-iK6-sJOMju3P3_1UzgOpVkHHOVJl/view?usp=sharing",
    tooltip: "résumé",
    title: "Resume",
    icon: <ResumeIcon />,
  },
];

export default function Socials() {
  return (
    // TODO fix position on small screens
    <div className="left fixed left-4 md:left-6 md:block hidden">
      <ul className="flex flex-col gap-5 my-4">
        {socials.map(({ href, tooltip, title, icon }) => (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="flex items-center p-1 gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              {icon}
              <span className="absolute left-full ml-3 hidden rounded bg-gray-900 px-2 py-1 text-sm text-white opacity-0 transition group-hover:flex group-hover:opacity-100">
                {tooltip}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
