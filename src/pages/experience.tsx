import experience from "@/assets/data/experience";
import React from "react";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <main className="mt-5 flex flex-col gap-5 px-5">
      <h1 className="text-3xl font-bold">Experience</h1>
      {experience.map((job, index) => (
        <>
          <section key={index}>
            <ul className="ml-5 list-disc">
              <li>
                <span className="font-bold">Time: </span>
                {new Date(job.startDate).toLocaleDateString("en", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                /{" "}
                {!!job.endDate
                  ? new Date(job.endDate).toLocaleDateString("en", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Present"}
              </li>
              <li>
                <span className="font-bold">Company: </span>
                {job.company}
              </li>
              <li>
                <span className="font-bold">Location: </span>
                {job.location}
              </li>
            </ul>
            <h2 className="mt-2 font-bold">Description:</h2>
            <p className="text-justify">{job.description}</p>
          </section>
          <hr />
        </>
      ))}
    </main>
  );
};

export default Experience;
