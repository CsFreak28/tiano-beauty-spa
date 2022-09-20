import { ReactComponent as LogoSvg } from "../../assets/svgs/logo.svg";
import { useEffect, useState, useRef } from "react";
import animateLoader from "../animations/loaderAnimation";
const LoadingScreen = () => {
  const paragraphRef = useRef<any>(null);
  const [showText, setShowText] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.fonts.addEventListener("loadingdone", () => {
      setShowText((prev) => true);
    });
    if (showText) {
      let paragraph = paragraphRef.current as HTMLParagraphElement;
      animateLoader(paragraph);
    }
  }, [showText]);
  return (
    <div
      style={{
        backgroundColor: "#f3f3f3",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        zIndex: "30",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <LogoSvg width="150" height={"140px"} />
        {showText && (
          <p
            style={{
              fontFamily: "helvetica_medium",
              fontSize: "1rem",
              textAlign: "center",
              marginLeft: "10px",
            }}
            ref={paragraphRef}
          >
            <span>l</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default LoadingScreen;
