import { EmailIcon, GitHubIcon, LinkedInIcon } from "./svgs/Icons";

const socials = [
  {
    href: "mailto:stvnchng22@gmail.com",
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

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-20">
      <div className="max-w-2xl">
        <p className="text-lg">
          Hi, I&apos;m Steven. I enjoy crafting seamless user experiences and
          bringing fun ideas to life. I&apos;m currently an engineer at
          EnergyBot, working across both the UI and backend to enhance the
          residential customer experience.
        </p>
        <br />
        <p className="text-lg">
          Outside of work, I create interactive media like games and websites —
          this one included.
        </p>
        <br />
        <p className="text-lg md:hidden block">
          This site has extra interactivity on larger screens — try raising your
          own army of plankton!
        </p>
        <p className="text-lg md:block hidden">
          While you&apos;re here, please be sure to keep the plankton fed. They
          only need light but they tend to starve easily!
        </p>
        <br />
        <div className="md:hidden flex justify-center gap-4">
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 transition active:scale-90 focus:scale-90"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
