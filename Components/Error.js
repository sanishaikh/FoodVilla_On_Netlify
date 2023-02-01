import React from "react";
import {useRouteError} from "react-router-dom"

const Error =()=>{

    const err = useRouteError()
    console.log(err)
    return(
        <>
        <h1> Oops something went wrong.....</h1>
        <h2> Please try again......</h2>
        <h3>{err.status + ": " + err.statusText}</h3>
        </>

    )
}

export default Error