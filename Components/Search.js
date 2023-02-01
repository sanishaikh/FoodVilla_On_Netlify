import React,{useState, useEffect} from "react"
 

const SearchBar=({initialResData,setFilterdata})=>{
   const [searchText, setSearchText] =useState("")
   console.log("search",initialResData)
   let  filtered =[]
   
   const searchHandler=()=>{
       filtered = initialResData.filter((item)=>{
        item.includes(searchText)
    })
    console.log(filtered)
   }

  useEffect(()=>{
    searchHandler()
  })


    return(
         <> 
         <form>
            <input className="inpSearch" onChange={(e)=>setSearchText(e.target.value)} type="text" value={searchText}/>
            <button className="btnSearch" > Search </button>
         </form>
     </>
    )
}

export default SearchBar