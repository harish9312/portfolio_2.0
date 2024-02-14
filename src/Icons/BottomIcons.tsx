export const GHIcon = ({ className }: { className: string }) => (
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

export const DevTo = ({
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

export const MeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59c.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729c.284 1.814.933 1.491.933 2.481c0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-.914-2.801-1.684-2.801-3.334c0-.99.647-.667.932-2.481c.119-.753.692-.012.803-1.729c0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096c-.333-.34-.558-.881.466-1.424c-2.24-.105-2.761 1.067-3.954 1.929"
    ></path>
  </svg>
);

export const ProjectsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19 4h-4.18a2.988 2.988 0 0 0-5.64 0H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2m-7 0a1 1 0 1 1-1 1a1.003 1.003 0 0 1 1-1m-2 5l2.79 2.794l2.52-2.52L14 8h4v4l-1.276-1.311l-3.932 3.935L10 11.83l-2.586 2.584L6 13Zm9 10H5v-2h14Z"
    ></path>
  </svg>
);

export const BagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14z"
    ></path>
  </svg>
);

export const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828C4.343 2 6.239 2 10.03 2c.606 0 1.091 0 1.5.017c-.013.08-.02.161-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22"
      clipRule="evenodd"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="m11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a5.488 5.488 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"
    ></path>
  </svg>
);
