import Head from "next/head";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";

function ProgressBarAccelerating() {

    const [isLoading, setIsLoading] = useState(false);



    return (
        <div>
            <ActionButton 
                    text="Klikk her for å starte lastingen"
                    onClick={() => {setIsLoading(false); setTimeout(()=>setIsLoading(true), 1)}}
                />
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