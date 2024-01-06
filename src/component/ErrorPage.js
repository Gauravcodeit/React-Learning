import { useRouteError } from "react-router-dom"
export const  ErrorPage = ()=>{
    const err = useRouteError()
    return (<>
    <h1>
        ERROR
    </h1>
    <h3>
    {err.status} : {err.statusText}
    </h3>
    <div>
        Error Page
    </div>
    </>)
}