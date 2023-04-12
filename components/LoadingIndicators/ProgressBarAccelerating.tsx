import Head from "next/head";
import { useState } from "react";

function ProgressBarAccelerating() {

    const [isLoading, setIsLoading] = useState(false);



    return (
        <div>

            <div style={{ marginBottom: "1em", fontSize: "22px" }}>
                <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)" }}
                    checked={isLoading}
                    onChange={() => setIsLoading(!isLoading)}
                />
                <label htmlFor="loading" style={{ marginLeft: "1em" }}>Huk av for å starte lasting</label>
            </div>
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
                    animation: isLoading ? "bar 5s ease-in" : "none",
                    width: isLoading ? "100%" : "0%"
                }}></div>

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
        </div>
    )

}

export default ProgressBarAccelerating;