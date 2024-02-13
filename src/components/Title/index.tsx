import classNames from "./title.module.scss";

interface ITitleProps {
  children: JSX.Element | string;
}

export const Title = (props: ITitleProps) => {
  return <div className={classNames.title + " mont"}>{props.children}</div>;
};
