import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Bankly",
    description:
      "Bankly is a full-stack Next.js app for secure online banking with real-time transfers, account sync, and Stripe-powered payments.",
    image: "/bankly2.png",
    github: "https://github.com/stevl3/bankly.git",
    link: "https://banklybank.vercel.app/dashboard",
  },
  {
    name: "Immigrant Document Translator",
    description:
      "Transluvia is a Next.js web app that uses Google Cloud Vision and Translate APIs to convert scanned immigrant documents into any language instantly, helping bridge language gaps for underserved communities.",
    image: "/transluvia.png",
    github: "https://github.com/stevl3/Transluvia",
    link: "https://transluvia.vercel.app/demo",
  },
  {
    name: "Financial Document Simplifier",
    description:
      "Financial Simplifier is a React web app that uses OCR and the OpenAI API to instantly summarize complex financial documents, helping users understand contracts, statements, and disclosures.",
    image: "/financial.png",
    github: "",
    link: "",
  },
  {
    name: "CreditCardGaurd",
    description:
      "CreditCardGuard is a Python ML app using scikit-learn and SMOTE to detect fraudulent transactions in financial data.",
    image: "/creditcardgaurd.png",
    github: "https://github.com/stevl3/CreditCardGaurd.git",
    link: "https://stevl3.github.io/Credit-Card-Fraud-ML/",
  },
  {
    name: "StayMate",
    description:
      "StayMate is a React and Firebase web app that helps Airbnb guests access check-in info and property managers track issues.",
    image: "/staymate.png",
    github: "https://github.com/stevl3/staycozy.git",
    link: "https://staycozy.vercel.app/checkin/T7d9kKMsB2",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
