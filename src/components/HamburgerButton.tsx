type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function HamburgerButton({ open, setOpen }: Props) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="fixed top-4 right-4 w-10 h-10 flex flex-col justify-between p-2 z-50"
      aria-label="Toggle Navigation"
    >
      <span
        className={`block h-1 bg-white transition-transform duration-300 ${
          open ? "rotate-45 translate-y-3" : ""
        }`}
      ></span>
      <span
        className={`block h-1 bg-white transition-opacity duration-300 ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 bg-white transition-transform duration-300 ${
          open ? "-rotate-45 -translate-y-3" : ""
        }`}
      ></span>
    </button>
  );
}
