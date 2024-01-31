"use client";
import { useEffect, useState } from "react";
import data from "./data.json";
import classNames from "./projectsContainer.module.scss";
import { Icon } from "@iconify/react";
import { checkWindow } from "@/utils";

interface IProjectsContent {
  title: string;
  content: string;
  techStackIcon: {
    icon: string;
    name: string;
    color?: string;
  }[];
}

export const ProjectsContainer = () => {
  return (
    <div className={classNames.projectsContainer+ " no-scrollbar"} id="expContainer">
      {data.map((expData, index) => {
        return (
          <ProjectsContent
            title={expData.title}
            content={expData.content}
            key={index + new Date().getTime()}
            techStackIcon={expData.techStackIcons}
          />
        );
      })}
    </div>
  );
};

export const ProjectsContent = (props: IProjectsContent) => {
  return (
    <div className={classNames.projectsMain}>
      <div className={classNames.title + " raleway"}>{props.title}</div>
      <div className={classNames.expContent}>
        <div className={classNames.content + " spartan"}>{props.content}</div>
        <div className={classNames.techStackUsed}>
          <div className={classNames.iconTitle + " raleway"}>
            Tech Stack Used
          </div>
          <div className={classNames.icons}>
            {props.techStackIcon.map((iconName, index) => {
              return (
                <div key={index} title={iconName.name}>
                  <Icon
                    fontSize="70px"
                    color={iconName.color}
                    icon={iconName.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ScrollDown = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    if (checkWindow()) {
      window.document
        .getElementById("expContainer")
        ?.addEventListener("scroll", (e: any) => {
          console.log(">> e", e.target?.scrollTop);
          if (e.target.scrollTop > 50) {
            setScrolled(e.target.scrollTop);
          } else {
            setTimeout(() => {
              setScrolled(e.target.scrollTop);
            }, 200);
          }
        });
    }
  }, []);

  return (
    <div
      className={`${classNames.scrollDownIcon} ${
        scrolled ? classNames.rotate : ""
      } `}
      onClick={() => {
        if (checkWindow()) {
          window.document.getElementById("expContainer")?.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}
    >
      <Icon color="#fff" icon={"icon-park-solid:down-c"} fontSize={"40px"} />
    </div>
  );
};
