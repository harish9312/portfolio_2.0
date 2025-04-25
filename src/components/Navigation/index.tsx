"use client";
import { BagIcon, MeIcon, ProjectsIcon, ResumeIcon } from "@/Icons/BottomIcons";
import classNames from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routeArray = [
  { pathName: "/", title: "About", icon: <MeIcon /> },
  { pathName: "/projects", title: "Projects", icon: <ProjectsIcon /> },
  { pathName: "/experience", title: "Experience", icon: <BagIcon /> },
  // { pathName: "/tech-stack", title: "Tech Stack" },
  {
    target: "_blank",
    pathName:
      "https://drive.google.com/file/d/1Hu8qQV9pFDkhBxP_IDj-AHzog5AmasC0/view",
    title: "Resume",
    icon: <ResumeIcon />,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  const key = "DONE";

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, "yes");
    }
  }, []);

  let isDone;
  if (typeof window !== "undefined") {
    isDone = window.sessionStorage.getItem(key);
  }

  return (
    <>
      <MobileNav pathname={pathname} />
      <div
        className={`${classNames.navContainer} ${
          !isDone ? classNames.animate : ""
        }`}
      >
        <div className={classNames.navItems}>
          <div className={classNames.toTop}>
            <Line />
          </div>
          <div className={classNames.items}>
            {routeArray.map((route) => {
              return (
                <Link
                  target={route.target}
                  key={route.pathName}
                  href={route.pathName}
                >
                  <LinkComponent isActive={pathname === route.pathName}>
                    {route.title}
                  </LinkComponent>
                </Link>
              );
            })}
          </div>
        </div>
      </div>{" "}
    </>
  );
};

const MobileNav = ({ pathname }: { pathname: string }) => {
  return (
    <div className={classNames.mobileNavContainer}>
      <div className={classNames.items}>
        {routeArray.map((route) => {
          return (
            <Link
              target={route.target}
              key={route.pathName}
              href={route.pathName}
            >
              <LinkComponent isActive={pathname === route.pathName}>
                {route.icon}
              </LinkComponent>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const LinkComponent = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: string | JSX.Element;
}) => (
  <div
    className={
      isActive
        ? `${classNames.navItem} ${classNames.active}`
        : classNames.navItem
    }
  >
    <div className={classNames.text}>{children}</div>
  </div>
);

export const Line = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="216"
      viewBox="0 0 6 216"
      fill="none"
    >
      <rect width="6" height="216" rx="3" fill="url(#paint0_linear_909_81)" />
      <defs>
        <linearGradient
          id="paint0_linear_909_81"
          x1="3"
          y1="0"
          x2="3"
          y2="216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#59E15F" stopOpacity="0.42" />
          <stop offset="1" stopColor="#4FB477" />
        </linearGradient>
      </defs>
    </svg>
  );
};
