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
    <div className="relative w-full max-w-5xl bg-zinc-600/50 rounded-lg shadow-lg p-6 md:p-8 space-y-4 flex flex-col md:flex-row items-start md:items-center">
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
            "Conducted Lighthouse audits, reducing LCP from 6s to <1s.",
            "Wrote a concurrent system-wide migration script to move transaction-related emails from S3 to Elasticsearch.",
            "Integrated external APIs for suppliers OhmConnect and New Wave Energy into EnergyBot’s shopping experience.",
          ]}
        />
        <WorkItem
          company="Coinbase"
          logo="coinbase.jpg"
          title="Intern"
          date="Jun. 2022 - Aug. 2022"
          desc={[
            "Owned and documented a project to improve the UX of Coinbase Wallet’s transactions history page.",
            "Created features to allow sorting/filtering and added icons to show blockchain networks.",
            "Tackled UI fixes ahead of launch, helping release Wallet to 100% of over 10 million users.",
          ]}
        />
        <WorkItem
          company="CyberCube"
          logo="cybcube.png"
          title="Intern"
          date="Jun. 2021 - Aug. 2021"
          desc={[
            "Added telemetry logging to track usage patterns for CyberCube's user admin software and CMS.",
            "Recorded active page view times and compiled data into graphs and charts with AWS.",
          ]}
        />
        <WorkItem
          company="Kopis Mobile"
          logo="kopis.png"
          title="Engineer"
          date="Aug. 2020 - Apr. 2021"
          desc={[
            "Converted production app for content management to a mobile-friendly design.",
            "Designed and launched product landing pages with React.",
            "Created a logging tool to improve the efficiency of a lean services network.",
          ]}
        />
      </div>
    </section>
  );
}
