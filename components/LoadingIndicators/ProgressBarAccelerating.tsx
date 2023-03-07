import Head  from "next/head";

function ProgressBarAccelerating() {

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
                        animation: 'bar 4s ease-in'
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