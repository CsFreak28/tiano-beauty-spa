import { ReactComponent as LogoIcon } from "../../assets/svgs/logo.svg";
const SuspenseLoader = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <LogoIcon width={width} height={height} />
    </div>
  );
};
export default SuspenseLoader;
