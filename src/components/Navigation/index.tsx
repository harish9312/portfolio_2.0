import classNames from "./navigation.module.scss";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className={classNames.navContainer}>
      <div className={classNames.navItems}>
        <div className={classNames.toTop}>
          <Line />
        </div>
        <div className={classNames.toLeft}>
          <Line />
        </div>
        <div className={classNames.navItem}>
          <Link href="/about">About</Link>
        </div>
        <div className={classNames.navItem}>
          <Link href={"/experience"}>Experience</Link>
        </div>
        <div className={classNames.navItem}>
          <Link href={"/repos"}>Repos</Link>{" "}
        </div>
        <div className={classNames.navItem}>
          <Link href={"/tech-stack"}>Tech Stack</Link>
        </div>
        <div className={classNames.navItem}>
          <Link href={"/resume"}>Resume</Link>
        </div>
      </div>
    </div>
  );
};

export const Line = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="216"
      viewBox="0 0 6 216"
      fill="none"
    >
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0V216H0V6Z"
        fill="url(#paint0_linear_909_81)"
      />
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
