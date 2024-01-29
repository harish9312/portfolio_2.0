"use client";
import classNames from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routeArray = [
  { pathName: "/", title: "About" },
  { pathName: "/experience", title: "Experience" },
  { pathName: "/tech-stack", title: "Tech Stack" },
  {
    target: "_blank",
    pathName:
      "https://drive.google.com/file/d/1iaisaKtJOx5nVlVe_bxj99V8ZS2LhhRx/view",
    title: "Resume",
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className={classNames.navContainer}>
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
    </div>
  );
};

const LinkComponent = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: string;
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
          <stop stop-color="#59E15F" stopOpacity="0.42" />
          <stop offset="1" stop-color="#4FB477" />
        </linearGradient>
      </defs>
    </svg>
  );
};
