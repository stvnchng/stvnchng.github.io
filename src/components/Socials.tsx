const socials = [
  {
    href: "mailto:sc111@rice.edu",
    tooltip: "sc111@rice.edu",
    title: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 transition hover:text-gray-500 dark:hover:text-gray-400"
      >
        <path d="M12 13.586l-8.707-8.707A1 1 0 0 1 4 4h16a1 1 0 0 1 .707 1.707L12 13.586zM4 6.414V18h16V6.414l-8 8-8-8z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/stvnchng",
    tooltip: "@stvnchng",
    title: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 transition hover:text-gray-500 dark:hover:text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.72c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.91 1.55 2.4 1.1 2.98.84.09-.66.36-1.1.65-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.05-2.71-.1-.26-.46-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.51 9.51 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.56 1.38.2 2.4.1 2.66.66.71 1.05 1.61 1.05 2.71 0 3.85-2.34 4.7-4.57 4.95.37.32.7.94.7 1.91v2.83c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/stvnchng",
    tooltip: "/in/stvnchng",
    title: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8 transition hover:text-gray-500 dark:hover:text-gray-400"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"
        />
      </svg>
    ),
  },
  {
    href: "https://drive.google.com/file/d/1wH1-iK6-sJOMju3P3_1UzgOpVkHHOVJl/view?usp=sharing",
    tooltip: "résumé",
    title: "Resume",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 transition hover:text-gray-500 dark:hover:text-gray-400"
      >
        <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8M14 2L20 8M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <div className="fixed left-4 bottom-4 md:left-6 md:bottom-6">
      <ul className="flex flex-col gap-3">
        {socials.map(({ href, tooltip, title, icon }) => (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
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
