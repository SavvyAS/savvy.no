import Head from "next/head";
import { useRef, useState, useEffect } from "react";

const ProgressBar: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div
        className="bar"
        style={{
          background: "#efefef",
          position: "relative",
          overflow: "hidden",
          marginBottom: "2em",
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #712cff",
          boxShadow: "0 0 10px #712cff"
        }}
      >
        <div
          className="progress"
          style={{
            height: "2em",
            backgroundColor: "#e01de0",
            overflow: "hidden",
            animation: isLoading ? "bar 5s linear" : "none",
            width: isLoading ? "100%" : "0%"
          }}
        ></div>
      </div>

      <div style={{ marginBottom: "1em" }}>
        <input
          type="checkbox"
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <label htmlFor="loading">Loading Animation</label>
      </div>

      <Head>
        <style>
          {`
                  @keyframes bar {
                      0% {
                          width: 0%;
                      }
                      100% {
                          width: 100%;
                      }
                  }
              `}
        </style>
      </Head>
    </>
  );
};

export default ProgressBar;
