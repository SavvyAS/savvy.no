import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";

    const  ProgressBarCounterAccFlow: React.FC<{ hasCompleted: boolean, estimatedDuration: number, makeFaster: boolean}> = (
        { makeFaster }) => {
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
                        animation: isLoading ? 'bar 5s ease-in' : "none",
                        width: isLoading ? "100%" : "0%"
                    }}>

                    {makeFaster && <div className="counter-flow-speedup" style={{
                        height: '2em',
                        width: '300%',
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                        left: 0,
                        backgroundSize: '60px 60px',
                        opacity: '0.3',
                        backgroundImage: `linear-gradient(
                            45deg,
                            #efefef 25%,
                            transparent 25%,
                            transparent 50%,
                            #efefef 50%,
                            #efefef 75%,
                            transparent 75%,
                            transparent
                          )`,
                          animation: isLoading ? 'counter-flow-speedup 5s ease-in' : "none",
                        }}>
                    
                    </div>}
                </div>

            </div>
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

                    @keyframes counter-flow-speedup {
                          0% {
                            transform: translateX(0);
                          }
                          100% {
                            transform: translateX(-30%);
                          }
                    }
                `}
            </style>
        </div>
)

}

export default ProgressBarCounterAccFlow
