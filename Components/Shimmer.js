import React from "react"
import './style.css'
const Shimmer =()=>{
 let arr =[1,2,3,4,5,1,2,3,4,5]
    return(
        <>
        <div className="ShimmerMain">
        {arr.map((items,id=0)=>(
            <div className="ShimmerMainDiv" key={id+1}>
            <div className="ShimmercardStyle" > 
           <div className="ShimmerH1"> </div>
           <div className="ShimmerH1"> </div>
           <div className="ShimmerH1"> </div>
            
            </div>
        </div>
        ))}
       
       </div>
        </>

    )
}

export default Shimmer