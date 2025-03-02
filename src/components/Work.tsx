type WorkItemProps = {
  company: string;
  logoSrc: string;
  title: string;
  date: string;
  desc: string[];
};

function WorkItem({ company, logoSrc, title, date, desc }: WorkItemProps) {
  return (
    <div className="relative w-full max-w-4xl bg-zinc-600/50 rounded-lg shadow-lg p-6 md:p-8 space-y-4 flex flex-col md:flex-row items-start md:items-center transition duration-300 hover:scale-105">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-50">
          {title} @ {company}
        </h1>
        <h6 className="text-base text-gray-200">{date}</h6>
        <ul className="text-sm list-disc pl-6 text-gray-100 space-y-1">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 ml-6">
        <img
          src={logoSrc}
          alt={`${company} logo`}
          className="object-contain h-16 w-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-16 px-6 md:px-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light uppercase">Experience</h1>
      </div>
      <div className="w-full flex flex-col space-y-8">
        <WorkItem
          company="EnergyBot"
          logoSrc="/images/ebot.svg"
          title="Engineer"
          date="Apr. 2023 - Present"
          desc={[
            "Improved test pipeline speed by 6-7x by migrating to a parallel headless setup.",
            "Reduced LCP on pages from ~6s to ~1s.",
            "Improved search efficiency of transactional emails by writing a concurrent migration script from S3 to Elasticsearch.",
            "Added hundreds of plan options for customers by integrating energy supplier APIs into shopping experience.",
          ]}
        />
        <WorkItem
          company="Coinbase"
          logoSrc="/images/coinbase.jpg"
          title="Intern"
          date="Jun. 2022 - Aug. 2022"
          desc={[
            "Owned a project to add sorting/filtering to Coinbase Wallet’s transactions page, improving user experience.",
            "Helped release Wallet to 100% of over 10 million mobile users. Worked closely with Product and Design to address UI jank and redesign components.",
          ]}
        />
        <WorkItem
          company="CyberCube"
          logoSrc="/images/cybcube.png"
          title="Intern"
          date="Jun. 2021 - Aug. 2021"
          desc={[
            "Integrated client-side usage data collection for internal content management system and client-facing broker manager software.",
            "Leveraged AWS Quicksight to create usage data visualizations for account admins.",
          ]}
        />
        <WorkItem
          company="Kopis Mobile"
          logoSrc="/images/kopis.png"
          title="Engineer"
          date="Aug. 2020 - Apr. 2021"
          desc={[
            "Wrote mobile-responsive SASS/CSS and end-to-end Cypress tests for content management apps.",
            "Developed a GUI to automate and speed up the startup of an air-to-ground network configuration.",
          ]}
        />
      </div>
    </section>
  );
}
