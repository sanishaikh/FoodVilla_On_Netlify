import React from "react"
import { Link, Outlet } from "react-router-dom"

const Title =()=>(
    <a href="/"> <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP8H2paO0fRUrqkMP4Pb5bj6sWqAITUOveg&usqp=CAU" alt="logo" /></a>  
)

const HeaderComponent =()=>{
    return (
        <div className="header"> 
            <Title />
           
            <div className="nav-items">
                <ul> 
                 <li> <Link to="/"> Home </Link> </li>
                     <li> <Link to="/about"> About  </Link> </li>
                    <li> <Link to="/contact"> Contact  </Link> </li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    )
}

export default HeaderComponent