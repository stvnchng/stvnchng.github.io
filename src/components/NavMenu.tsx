type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function NavMenu({ open, setOpen }: Props) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-4xl font-bold bg-gradient-to-l from-gray-600 via-blue-900 to-black transition-transform duration-500 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="space-y-8 text-center">
        {["About", "Work", "Resume"].map((item, index) => (
          <li
            key={index}
            className={`transition-transform duration-500 ${
              open ? "fly-in" : "fly-out"
            }`}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
