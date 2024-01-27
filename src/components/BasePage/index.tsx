import { Navigation } from "../Navigation";
import classNames from "./basePage.module.scss";

interface IBasePageProps {
  children?: JSX.Element;
  showIntro?: boolean;
}

export const BasePage = (props: IBasePageProps = { showIntro: false }) => {
  console.log(">> props", props);
  return (
    <div className={classNames.basePageContainer}>
      <Navigation />
      {props.showIntro && <Introduction />}
      {props.children}
    </div>
  );
};

const Introduction = () => {
  return (
    <>
      <div className={classNames.topLeft}>
        <Line className={classNames.baseBorderToRight} />
        <Line className={classNames.baseBorderToBottom} />
      </div>
      <div className={classNames.midContent}>
        <div className={classNames.me}>
          <div className={classNames.hi}>Hi,</div>
          <div className={classNames.greet}>
            I am <span className={classNames.name}>Harish Soni</span>{" "}
          </div>
        </div>

        <div className={classNames.introduction}>
          Having accumulated more than 6 years of practical experience as a
          JavaScript Developer, my primary focus revolves around creating
          reliable and scalable web applications by strictly adhering to clean
          coding principles. Alongside my extensive development skills, I also
          derive great satisfaction from conducting thorough research to
          identify the most suitable Tech Stack for efficient application
          development and deployment through extensive internet exploration.
        </div>
      </div>
      <div className={classNames.bottomRight}>
        <Line className={classNames.baseBorderToRight} />
        <Line className={classNames.baseBorderToBottom} />
      </div>
    </>
  );
};

const Line = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="316"
    height="26"
    viewBox="0 0 316 26"
    fill="none"
  >
    <path
      d="M0.00752304 12.8748C0.00768291 5.76424 5.77205 0 12.8826 0L315.295 5.95658e-10L280.437 25.7118L12.8839 25.7496C5.7726 25.7506 0.00736316 19.9861 0.00752304 12.8748V12.8748Z"
      fill="url(#paint0_linear_909_120)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_909_120"
        x1="298.5"
        y1="13"
        x2="2.5"
        y2="13.0067"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E19E" stopOpacity="0.29" />
        <stop offset="1" stopColor="#28B087" />
      </linearGradient>
    </defs>
  </svg>
);
