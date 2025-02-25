const socials = [
  {
    href: "mailto:sc111@rice.edu",
    label: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12 13.586l-8.707-8.707A1 1 0 0 1 4 4h16a1 1 0 0 1 .707 1.707L12 13.586zM4 6.414V18h16V6.414l-8 8-8-8z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/stvnchng",
    label: "@stvnchng on GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
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
    label: "Steven Chung on LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.5 17V10H6V17H8.5M7.25 8.75A1.25 1.25 0 1 0 7.25 6.25A1.25 1.25 0 0 0 7.25 8.75M18 17V13.5C18 12.2 17.2 11 15.5 11C14.5 11 13.75 11.5 13.5 12V10H11V17H13.5V13.75C13.5 13 14 12.5 14.75 12.5S16 13 16 13.75V17H18Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center py-4 text-sm text-lightText dark:text-darkText">
      <div className="mb-2 flex gap-4">
        {socials.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition hover:text-lightAccent dark:hover:text-darkAccent"
          >
            {icon}
          </a>
        ))}
      </div>
      <span>Designed and built by Steven Chung {new Date().getFullYear()}</span>
    </footer>
  );
}
