import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center mx-auto">
          <div className="w-full max-w-xs mx-auto">
            <Image
              src="/images/run.gif"
              alt="running-pixel-guy"
              width={180}
              height={180}
              loading="lazy"
              className="w-full max-w-[180px] mx-auto"
            />
          </div>
          <div className="ml-10">
            <p className="text-2xl">
              I specialize in building and designing great user experiences. I
              have been fortunate enough to work on all parts of the stack,
              however, and my interests in tech are varied.
            </p>
            <br />
            <p className="text-2xl">
              In my spare time, I enjoy building interactive media such as games
              or websites like this one.
            </p>
            <br />
            <p className="text-2xl">
              While you&apos;re here, please be sure to keep the plankton fed.
              All they need is light but they tend to starve easily.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
