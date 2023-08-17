import React from "react"
import {Link} from "react-router-dom"
import Photo_detail from "./photo_details";
// import Card from "./card"

export default function Photos(){
    let DataState = true;
  
    const [Data,setData] = React.useState([])
    const [next1,setNext] = React.useState(1)
    function test(){
        setNext(prev=>prev+1)
    }

    React.useEffect(()=>{
        DataState = true;
        fetch("https://api.catboys.com/img")
        .then(data=>data.json())
        .then(res=>setData(prev=>[...prev,res]))
        .then(DataState=false)
    },[next1])


    // const Image =  <div key={Data.url}>

    // <img className="photo-image" src={Data.url}/>

    // <h1>Artist :{Data.artist}</h1>
   
    // <h1>Source :{Data.source_url}</h1>

    // </div>

    const Image = Data.map(item=>(
          <div key={item.url}>
          <Link to={`/photos/photo_details/${encodeURIComponent(item.url)}`}>
          <img className="photo-image" src={item.url}/>
            
          </Link>

          
              
              {/* <h1>{item.artist}</h1>
             <h1>Source :{item.source_url}</h1> */}
          </div>
           
        )
    )
    

    return(

        <div>
        
         {Image}
         {/* <pre>{JSON.stringify(Data,null,2)}</pre> */}
         
         <button onClick={test}>next</button>
        

        </div>
       
        
    )
}