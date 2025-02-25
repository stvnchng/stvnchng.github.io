export default function SocialLinks() {
  return (
    <ul className="flex space-x-6">
      <li>
        <a
          href="mailto:sc111@rice.edu"
          aria-label="Email"
          className="hover:text-gray-300"
        >
          <i className="fa fa-envelope text-3xl"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/stvnchng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-300"
        >
          <i className="fab fa-github text-3xl"></i>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/stvnchng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-300"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
      </li>
    </ul>
  );
}
