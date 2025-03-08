export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mt-4">
        <div className="w-full h-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 z-10">
          <a
            href="https://github.com/stvnchng"
            className="text-sm text-lightText dark:text-darkText transition transform hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-0.5 hover:scale-105 mb-6"
          >
            Designed and built by @stvnchng
          </a>
        </div>
      </div>
    </footer>
  );
}
