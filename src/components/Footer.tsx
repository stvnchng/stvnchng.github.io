export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mt-4">
        <svg
          className="relative w-full z-10 mb-[-7px] min-h-[100px] max-h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 40"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="abyss-wave"
              d="M-160 44c30 0 58-14 88-14s 58 14 88 14 58-14 88-14 58 14 88 14 v44h-352z"
            />
          </defs>
          <g className="ocean-floor">
            <use
              xlinkHref="#abyss-wave"
              x="48"
              y="-2"
              fill="rgba(19, 27, 29, 0.75)"
            />
            <use
              xlinkHref="#abyss-wave"
              x="48"
              y="-4"
              fill="rgba(34, 45, 52, 0.6)"
            />
            <use
              xlinkHref="#abyss-wave"
              x="48"
              y="-6"
              fill="rgba(41, 53, 64, 0.45)"
            />
            <use xlinkHref="#abyss-wave" x="48" y="2" fill="#1a2a32" />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 z-10 ">
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
