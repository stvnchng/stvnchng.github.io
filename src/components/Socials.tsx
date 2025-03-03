import { EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "./svgs/Icons";

const socials = [
  {
    href: "mailto:sc111@rice.edu",
    tooltip: "sc111@rice.edu",
    label: "Message at sc111@rice.edu",
    icon: <EmailIcon />,
  },
  {
    href: "https://github.com/stvnchng",
    tooltip: "@stvnchng",
    label: "@stvnchng on GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://linkedin.com/in/stvnchng",
    tooltip: "/in/stvnchng",
    label: "/in/stvnchng on LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://drive.google.com/file/d/1wH1-iK6-sJOMju3P3_1UzgOpVkHHOVJl/view?usp=sharing",
    tooltip: "résumé",
    label: "My resume",
    icon: <ResumeIcon />,
  },
];

export default function Socials() {
  return (
    <div className="left fixed left-4 md:left-6 md:block hidden">
      <ul className="flex flex-col gap-5 my-4">
        {socials.map(({ href, tooltip, label, icon }) => (
          <li key={label}>
            <div className="relative group flex items-center">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1 text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                {icon}
              </a>
              <span
                role="tooltip"
                className="absolute left-full ml-2 px-2 py-1 text-sm text-white bg-teal-900 rounded opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible whitespace-nowrap"
              >
                {tooltip}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
