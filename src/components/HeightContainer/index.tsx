interface IHeghtContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const HeightContainer = (props: IHeghtContainerProps) => {
  return (
    <div style={{ minHeight: "70vh", maxHeight: "70vh", overflow: "hidden" }}>
      {props.children}
    </div>
  );
};
