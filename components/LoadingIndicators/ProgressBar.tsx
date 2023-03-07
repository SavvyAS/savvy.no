import Head from "next/head";
import { useRef, useState, useEffect } from "react";

const ProgressBar: React.FC<{ hasCompleted: boolean, estimatedDuration: number }> = (
    { hasCompleted, estimatedDuration }) => {

        let [progress, setProgress] = useState(0);

        useEffect(() => {
            if (hasCompleted) {
              setProgress(100);
              return;
            }
            const interval = setInterval(() => {
              setProgress((prevProgress) => {
                if (prevProgress >= 90) {
                  clearInterval(interval);
                  return 90;
                }
                return prevProgress + 1;
              });
            }, estimatedDuration / 100);
            return () => clearInterval(interval);
          }, [estimatedDuration, hasCompleted]);


    return (
        <div>
            <div className="bar" style={{
                background: '#efefef',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '2em',
                width: '100%',
                borderRadius: '10px',
                border: '1px solid #712cff',
                boxShadow: '0 0 10px #712cff'

            }}>

                <div className="progress" style={{
                    height: '2em',
                    backgroundColor: '#e01de0',
                    overflow: 'hidden',
                    width: `${progress}%`,
                    transition: 'width 0.5s'
                }}></div>

            </div>

            
        </div>
    )
}
export default ProgressBar; 