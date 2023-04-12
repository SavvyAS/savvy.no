import Head from "next/head";
import { useRef, useState, useEffect } from "react";

const ProgressBar: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);

  let style=`
  /* Custom checkbox container */
.custom-checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  margin: 20px;
  background-color: #333; /* Dark background color to contrast the white arrow */
  padding: 10px;
  border-radius: 5px;
}

/* Hide default checkbox */
.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

  `

  return (
    <>
      <div style={{ marginBottom: "1em", fontSize: "22px" }}>
        <input
          type="checkbox"
          style={{transform: "scale(1.5)"}}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <label htmlFor="loading" style={{marginLeft: "1em"}}>Huk av for å starte lasting</label>
      </div>
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
