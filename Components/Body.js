import React,{useState, useEffect} from "react"
import "./style.css"
import { IMG_URL, restaurant_Data } from "../constants/constants"
import Shimmer from "./Shimmer"




const BodyMain =()=>{
    const [initialResData, setInitialResData] = useState([])
    const [searchText, setSearchText] =useState("")
    const [shimmer, setShimmer] = useState(false)
    const [filterData, setFilterdata] = useState([])
    let filtered =[]
    console.log(restaurant_Data)
    async function getData(){
        resp = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4305582&lng=78.4613407&page_type=DESKTOP_WEB_LISTING")
        .then((res) => res.json())
        .then((resp) => {
            setInitialResData([...resp?.data?.cards[2]?.data?.data?.cards])
            setFilterdata([...resp?.data?.cards[2]?.data?.data?.cards])
       })
         
       
    }
    const searchHandler=(text,ResData)=>{
        ResData.filter((item)=>{
        item?.data?.name?.toLowerCase().includes(text.toLowerCase()) && filtered.push(item)
     })
     console.log(initialResData)
     setFilterdata([...filtered])
    }
 
    
useEffect(()=>{
    getData() 
    console.log("hi")
    
},[])

useEffect(()=>{
    searchHandler(searchText,initialResData)
},[searchText])

    return(
     
        
            <> <form>
            <input className="inpSearch" onChange={(e)=>setSearchText(e.target.value)} type="text" value={searchText}/>
            <button className="btnSearch" onClick={()=>searchHandler(searchText,initialResData)} > Search </button>
         </form>

        {initialResData.length==0 ?  <Shimmer /> : <div className="divMain">
        {  filterData.map((items)=>(
            <div className="mainDiv" key={items?.data?.id}>
            <div className="cardStyle" > 
            <img  className="imgStyle" src={IMG_URL + items?.data?.cloudinaryImageId}/>
            <h3> {items?.data?.name}</h3>
            <h5> {items?.data?.avgRating} stars </h5> 
        <h5>  {items?.data?.slaString}</h5>
            </div>
        </div>
        ))}
       
       </div> }   
            

       </>
        
        
       
    )
}

export default BodyMain