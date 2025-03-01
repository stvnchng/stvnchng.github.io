import { EmailIcon, GitHubIcon, LinkedInIcon } from "./svgs/Icons";

const socials = [
  {
    href: "mailto:sc111@rice.edu",
    label: "Email",
    icon: <EmailIcon />,
  },
  {
    href: "https://github.com/stvnchng",
    label: "@stvnchng on GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://linkedin.com/in/stvnchng",
    label: "Steven Chung on LinkedIn",
    icon: <LinkedInIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 text-sm text-lightText dark:text-darkText">
      <div className="mb-4 flex gap-4">
        {socials.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-1 transition hover:text-lightAccent dark:hover:text-darkAccent"
          >
            {icon}
          </a>
        ))}
      </div>
      <span>Designed and built by @stvnchng {new Date().getFullYear()}</span>
    </footer>
  );
}
