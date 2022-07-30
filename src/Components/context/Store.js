import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export  let ApiContext = createContext(0);
export default function ApiContextProvider(props) {
 
    const[movies,setMovie]=useState([]);
    const[Tv,setTv]=useState([]);
    const[people,setPeople]=useState([]);
  
   async function getData (Item,setItem){
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${Item}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      setItem(data.results)
  
   }
   useEffect(()=>{
    getData("movie",setMovie);
    getData("tv",setTv);
    getData("person",setPeople);
   },[])
    return <ApiContext.Provider value={{movies,Tv,people}}>
        {props.children}
    </ApiContext.Provider>
    
}