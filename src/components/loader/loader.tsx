import { ReactComponent as LogoSvg } from "../../assets/svgs/logo.svg";
import React, { useEffect, useState, useRef } from "react";
import animateLoader from "../animations/loaderAnimation";
interface LoadingScreenProps {
  loadSections: React.Dispatch<any>;
  lcpHasLoaded: boolean;
}
const LoadingScreen = (props: LoadingScreenProps) => {
  const paragraphRef = useRef<any>(null);
  const [showText, setShowText] = useState<boolean>(false);
  console.log(props.lcpHasLoaded)
  useEffect(() => {
    document.fonts.addEventListener("loadingdone", () => {
      setShowText((prev) => true);
    });
    if (showText) {
      let paragraph = paragraphRef.current as HTMLParagraphElement;
      animateLoader(paragraph).then(() => {
        props.loadSections(true);
      });
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
      <div className="background"></div>
      <div>
        <LogoSvg width="150" height={"140px"} />
        {showText && (
          <p
            style={{
              fontFamily: "helvetica_medium",
              fontSize: "1.2rem",
              textAlign: "center",
              marginLeft: "10px",
            }}
            ref={paragraphRef}
          >
            <span
              style={{
                opacity: "0",
              }}
            >
              l
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              o
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              a
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              d
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              i
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              n
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              g
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              .
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              .
            </span>
            <span
              style={{
                opacity: "0",
              }}
            >
              .
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
export default LoadingScreen;
