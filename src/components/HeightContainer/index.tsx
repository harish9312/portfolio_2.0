import classNames from './heightContainer.module.scss'
interface IHeghtContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const HeightContainer = (props: IHeghtContainerProps) => {
  return (
    <div className={classNames.heightContainer + ' no-scrollbar'}>
      {props.children}
    </div>
  );
};
