import { ReactComponent as LogoIcon } from "../../assets/svgs/logo.svg";
const SuspenseLoader = ({
  width,
  height,
  containerWidth,
  containerHeight,
}: {
  width: string;
  height: string;
  containerWidth:string;
  containerHeight:string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      <LogoIcon width={width} height={height} />
    </div>
  );
};
export default SuspenseLoader;
