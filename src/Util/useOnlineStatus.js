import { useEffect, useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatusFlag , setOnlineStatusFlag ] = useState(true);
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnlineStatusFlag(true)
        })
        window.addEventListener("offline", ()=>{
            setOnlineStatusFlag(false)
        })
    }, [])
    return onlineStatusFlag
}
export default useOnlineStatus;