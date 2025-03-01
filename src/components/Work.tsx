import Image from "next/image";

type WorkItemProps = {
  company: string;
  logo: string;
  title: string;
  date: string;
  desc: string[];
};

function WorkItem({ company, logo, title, date, desc }: WorkItemProps) {
  return (
    <div className="relative w-full max-w-5xl bg-zinc-600/50 rounded-lg shadow-lg p-6 md:p-8 space-y-4 flex flex-col md:flex-row items-start md:items-center transition duration-300 hover:scale-105">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-50">
          {title} @ {company}
        </h1>
        <h6 className="text-lg text-gray-200">{date}</h6>
        <ul className="text-lg list-disc pl-6 text-gray-100 space-y-1">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 ml-6">
        <Image
          src={`/images/${logo}`}
          alt={`${company} logo`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="py-16 px-4 sm:px-8 flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light uppercase">Experience</h1>
      </div>
      <div className="w-full flex flex-col space-y-8">
        <WorkItem
          company="EnergyBot"
          logo="ebot.svg"
          title="Engineer"
          date="Apr. 2023 - Present"
          desc={[
            "Improved test pipeline speed by 6-7x by migrating to a parallel headless setup.",
            "Reduced LCP on shop site from ~6s to ~1s and conducted regular Lighthouse audits.",
            "Improved scalalibity of emails by writing a concurrent migration script from S3 to Elasticsearch.",
            "Added hundreds of plan options for customers by integrating external supplier APIs (OhmConnect, New Wave Energy, etc.) into shopping experience.",
          ]}
        />
        <WorkItem
          company="Coinbase"
          logo="coinbase.jpg"
          title="Intern"
          date="Jun. 2022 - Aug. 2022"
          desc={[
            "Owned a project to add sorting/filtering to Coinbase Wallet’s transactions page, working with Product and Design to improve the UX and usability.",
            "Helped release Wallet to 100% of over 10 million mobile users, fixing UI bugs and adding new components.",
          ]}
        />
        <WorkItem
          company="CyberCube"
          logo="cybcube.png"
          title="Intern"
          date="Jun. 2021 - Aug. 2021"
          desc={[
            "Integrated client-side usage data collection for internal content management system and client-facing broker manager software.",
            "Leveraged AWS Quicksight to create usage data visualizations for account admins.",
          ]}
        />
        <WorkItem
          company="Kopis Mobile"
          logo="kopis.png"
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
