import { useState } from "react";

    const  ProgressBarCounterAccFlow: React.FC<{ hasCompleted: boolean, estimatedDuration: number, makeFaster: boolean}> = (
        { makeFaster }) => {
            const [isLoading, setIsLoading] = useState(false);

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
                        animation: isLoading ? 'bar 5s linear' : "none",
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
            <div style={{ marginBottom: "1em" }}>
                <input
                    type="checkbox"
                    checked={isLoading}
                    onChange={() => setIsLoading(!isLoading)}
                />
                <label htmlFor="loading">Loading Animation</label>
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
                            transform: translateX(-20%);
                          }
                    }
                `}
            </style>
        </div>
)

}

export default ProgressBarCounterAccFlow
