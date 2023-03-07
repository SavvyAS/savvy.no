import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const LoadingContent: React.FC<{children:React.ReactNode, loadingTime: number, loadingIndicator: React.ReactNode}> = 
({children, loadingIndicator, loadingTime}) => {
    const [hasLoaded , setHasLoaded] = useState(false);
    const [hasStartedLoading, setHasStartedLoading] = useState(false);

    useEffect(() => {
        if(!hasStartedLoading) return;
        setTimeout(() => {
            setHasLoaded(true);
        }, loadingTime);
    }, [loadingTime, hasStartedLoading])


    return (
        <>
            {!hasStartedLoading && !hasLoaded && <Button icon={"plus"} onClick={()=>setHasStartedLoading(true)}>LAST INN</Button>}
            {hasStartedLoading && !hasLoaded && loadingIndicator}
            {hasLoaded && children}
        </>
    );
};

export default LoadingContent;