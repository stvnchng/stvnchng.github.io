export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-20">
      <div className="max-w-3xl">
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
      </div>
      {/* TODO add socials for mobile view */}
    </section>
  );
}
