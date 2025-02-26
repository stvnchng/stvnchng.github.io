"use client";

import { motion } from "framer-motion";
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
    <motion.details
      className="job-item enlarge"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <summary className="cursor-pointer">
        <Image
          src={`images/${logo}`}
          alt={`${company} logo`}
          loading="lazy"
          className="max-w-xs mx-auto"
        />
      </summary>
      <div className="title text-center">
        <h1 className="text-xl font-bold">
          {title} at {company}
        </h1>
        <h6 className="text-sm text-gray-500">{date}</h6>
      </div>
      <ul className="desc-items mt-4 list-disc pl-6">
        {desc.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.details>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-light uppercase">Experience</h1>
        </motion.div>
        <div className="space-y-6">
          <WorkItem
            company={"EnergyBot"}
            logo={"ebot.svg"}
            title={"Software Engineer"}
            date={"Apr. 2023 - Present"}
            desc={[
              "Rewrote EnergyBot’s end-to-end test suite to a parallel headless setup, improving execution time by 6-7x and reducing manual intervention by up to 2 hours/week.",
              "Conducted Lighthouse audits on EnergyBot’s site, reducing Largest Contentful Paint (LCP) from 6s to <1s and boosting performance from ~60 to above 90.",
              "Wrote a concurrent system-wide migration script to move transaction-related emails from S3 to Elasticsearch.",
              "Integrated external APIs for suppliers OhmConnect and New Wave Energy into EnergyBot’s shopping experience, increasing customer plan options.",
            ]}
          />
          <WorkItem
            company={"Coinbase"}
            logo={"coinbase.jpg"}
            title={"Software Engineer Intern"}
            date={"Jun. 2022 - Aug. 2022"}
            desc={[
              "Owned and documented a project to improve the UX of Coinbase Wallet’s transactions history page.",
              "Created features to allow sorting/filtering, added icons to show blockchain networks that transactions occurred on.",
              "Tackled UI fixes ahead of launch, helping release Wallet to 100% of over 10 million users on Android and iOS.",
            ]}
          />
          <WorkItem
            company={"CyberCube"}
            logo={"cybcube.png"}
            title={"Software Engineer Intern"}
            date={"Jun. 2021 - Aug. 2021"}
            desc={[
              "Added telemetry logging to CyberCube's user admin software and CMS to track usage patterns.",
              "Recorded active page view times for the CMS and compiled data into graphs and charts with AWS.",
            ]}
          />
          <WorkItem
            company={"Kopis Mobile"}
            logo={"kopis.png"}
            title={"Software Engineer"}
            date={"Aug. 2020 - Apr. 2021"}
            desc={[
              "Converted production app for content management to have mobile-friendly design using Sass/CSS.",
              "Designed and launched product landing pages with React.",
              "Created logging tool to improve efficiency of startup and configuration of a lean services network.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
