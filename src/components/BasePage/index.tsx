import Link from "next/link";
import { Navigation } from "../Navigation";
import classNames from "./basePage.module.scss";

interface IBasePageProps {
  children?: JSX.Element;
  showIntro?: boolean;
}

export const BasePage = (props: IBasePageProps = { showIntro: false }) => {
  return (
    <div className={classNames.basePageContainer}>
      <Navigation />
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
      <div className={classNames.introSection}>
        <div className={classNames.baseIntro}>
          {props.showIntro && <Introduction />}
          {props.children}
        </div>
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <>
      <div className={classNames.topLeft}>
        <Line className={classNames.baseBorderToRight} />
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
      </div>
    </>
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

const GHIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillOpacity={0}
      d="M15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98302 13.0822 6 14C7.01698 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18V22H15V18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5Z"
    >
      <animate
        fill="freeze"
        attributeName="fillOpstopOpacity"
        begin="0.6s"
        dur="0.15s"
        values="0;0.3"
      ></animate>
    </path>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={30}
        strokeDashoffset={30}
        d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="30;0"
        ></animate>
      </path>
      <path
        strokeDasharray={10}
        strokeDashoffset={10}
        d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          values="10;0"
        ></animate>
      </path>
    </g>
  </svg>
);

export const LinkedInIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="0;1"
        ></animate>
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={4}
      >
        <path strokeDasharray={12} strokeDashoffset={12} d="M4 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M10 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.5s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

const DevTo = ({
  className,
  innerClassName,
}: {
  innerClassName: string;
  className: string;
}) => (
  <div className={className}>
    <svg
      className={innerClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <g fill="none">
        <rect width={"256"} height={"256"} fill="#fff" rx={60}></rect>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M87.375 147.217c0 10.219-6.295 25.701-26.219 25.669H36V83h25.687c19.215 0 25.677 15.46 25.683 25.685zM62.582 99.819c2.104 0 4.213.788 6.316 2.363c2.098 1.575 3.156 3.944 3.16 7.095v37.837c0 3.156-1.05 5.519-3.154 7.095c-2.104 1.575-4.213 2.363-6.317 2.363h-9.46V99.819z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#000"
          d="M141.959 99.053h-28.886v20.871h17.658v16.064h-17.658v20.866h28.892v16.064h-33.712c-6.05.158-11.081-4.634-11.233-10.696V94.256c-.146-6.057 4.641-11.088 10.686-11.24h34.259zm56.19 62.631c-7.157 16.705-19.979 13.38-25.72 0l-20.89-78.662h17.658l16.108 61.778l16.031-61.778H219z"
        ></path>
      </g>
    </svg>
  </div>
);
