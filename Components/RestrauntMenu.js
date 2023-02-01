import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { IMG_URL } from "../constants/constants";

const RestrauntMenu =  () =>{
    //how to react a dynamic URL using Params
    const [resMenu, setResMenu] = useState({})
    const params = useParams();
    console.log("Hello",params)
    const { id } = params

    async function getRestrauntInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?menuId=34634")
        const json = await data.json()
        setResMenu(json.data)
        console.log(resMenu)
    }

    useEffect(()=>{
        getRestrauntInfo()
    },[])
    return(
        <>
        <h1>{resMenu.name}</h1>
        <img>{IMG_URL+resMenu.cloudinaryImageId}</img>
        </>
    )
}

export default RestrauntMenu