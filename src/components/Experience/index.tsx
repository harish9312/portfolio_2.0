import { createNodeKey } from "@/utils";
import data from "./data.json";
import classNames from "./experience.module.scss";

interface IDuration {
  from: string;
  to: string;
}

interface IExpRow {
  jobTitle: string;
  duration: IDuration;
  company: string;
  res: string;
}

export const ExperienceContainer = () => {
  return (
    <div className={classNames.experienceContainer + " no-scrollbar spartan"}>
      {data.reverse().map((job, index) => (
        <ExpRow
          key={createNodeKey(index)}
          duration={job.duration}
          res={job.res}
          company={job.company}
          jobTitle={job.title}
        />
      ))}
    </div>
  );
};

const ExpRow = (props: IExpRow) => {
  return (
    <div className={classNames.expContent}>
      <div className={classNames.left}>
        <Duration duration={props.duration} />
      </div>
      <div className={classNames.right}>
        <div className={classNames.top}>
          <CompanyName company={props.company} />
          <div className={classNames.divider} />
          <JobTitle jobTitle={props.jobTitle} />
        </div>
        <Responsibility res={props.res} />
      </div>
    </div>
  );
};

const JobTitle = ({ jobTitle }: { jobTitle: string }) => {
  return <div className={classNames.jobTitle}>{jobTitle}</div>;
};

const CompanyName = ({ company }: { company: string }) => {
  return <div className={classNames.companyName}>{company}</div>;
};

const Duration = ({ duration }: { duration: IDuration }) => {
  return (
    <div className={classNames.duration}>
      {duration.from} <span>-</span> {duration.to}
    </div>
  );
};

const Responsibility = ({ res }: { res: string }) => {
  return <div className={classNames.responsibility}>{res}</div>;
};
