"use client";
import { DevTo, GHIcon, LinkedInIcon } from "@/Icons/BottomIcons";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { Navigation } from "../Navigation";
import Particles from "../Particles";
import classNames from "./basePage.module.scss";

interface IBasePageProps {
  children?: JSX.Element | JSX.Element[];
  showIntro?: boolean;
  classNames?: {
    containerClassName?: string;
    introClassName?: string;
    animationClassName?: string;
  };
}

export const BasePage = (props: IBasePageProps = { showIntro: false }) => {
  return (
    <div
      className={`${classNames.basePageContainer} ${props.classNames?.containerClassName}`}
    >
      <Particles />
      <div className={classNames.icons}>
        <Link target="_blank" href={"https://github.com/harish9312/"}>
          <GHIcon className={classNames.commonIcon} />
        </Link>
        <LinkedInIcon className={classNames.commonIcon} />
        <Link target="_blank" href={"https://dev.to/harish_soni"}>
          <DevTo
            className={classNames.commonIcon}
            innerClassName={classNames.devTo}
          />
        </Link>
      </div>
      <div className={`${classNames.introSection}`}>
        <div
          className={`${props.classNames?.introClassName} ${classNames.baseIntro}`}
        >
          {props.showIntro && <Introduction />}
          <Fade>{props.children}</Fade>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

const Introduction = () => {
  return (
    <div className={classNames.introContainer}>
      <Fade>
        <div className={classNames.topLeft}>
          <Line className={classNames.baseBorderToRight} />
        </div>
      </Fade>
      <div className={classNames.midContent + " no-scrollbar"}>
        <div className={classNames.me}>
          <Slide>
            <div className={classNames.hi}>Hi,</div>
            <div className={classNames.greet}>
              I am <span className={classNames.name}>Harish Soni</span>{" "}
            </div>
          </Slide>
        </div>
        <Fade>
          <div className={classNames.introduction}>
            Having accumulated more than 6 years of practical experience as a
            JavaScript Developer, my primary focus revolves around creating
            reliable and scalable web applications by strictly adhering to clean
            coding principles. Alongside my extensive development skills, I also
            derive great satisfaction from conducting thorough research to
            identify the most suitable Tech Stack for efficient application
            development and deployment through extensive internet exploration.
          </div>
        </Fade>
      </div>
      <Fade>
        <div className={classNames.bottomRight}>
          <Line className={classNames.baseBorderToRight} />
        </div>
      </Fade>
    </div>
  );
};

const Line = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="316"
    height="316"
    viewBox="0 0 316 316"
    fill="none"
  >
    <path
      d="M0.0075118 13.3747C0.00767787 5.98807 5.99588 0 13.3825 0L315.295 5.95658e-10L280.437 26.7103L13.3839 26.7494C5.99648 26.7505 0.00734572 20.7621 0.0075118 13.3747Z"
      fill="url(#paint0_linear_917_3)"
    />
    <path
      d="M14.2391 0.000320123C6.37507 0.000143324 0 6.37507 0 14.2391V315.287L28.4366 280.431L28.4782 14.242C28.4795 6.37708 22.104 0.000496942 14.2391 0.000320123Z"
      fill="url(#paint1_linear_917_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_917_3"
        x1="298.5"
        y1="13.5049"
        x2="2.49999"
        y2="13.511"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E19E" stopOpacity="0.29" />
        <stop offset="1" stopColor="#28B087" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_917_3"
        x1="14.3777"
        y1="298.493"
        x2="14.3964"
        y2="2.4928"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E19E" stopOpacity="0.29" />
        <stop offset="1" stopColor="#28B087" />
      </linearGradient>
    </defs>
  </svg>
);
