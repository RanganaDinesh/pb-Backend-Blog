import React from 'react'
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import { TechnologyData } from '../../Api-Data/TechnologyData';
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Technology = () => {
    const Navigate = useNavigate()
    const handlenavigate = (id , item) => {
      Navigate(`/Details/${id}`,{
        state: { Details:item}
  
      })
    
    }
//   const Technology = require('../../../Components/Api-Data/technology-data.json')

  const adds = require('../../Api-Data/technology/adds-data.json');
  const videos = require('../../Api-Data/technology/videos-data.json');
  const posts = require('../../Api-Data/technology/posts-data.json')
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Technology").then(res=>res.json()).then(data=>{setData(data) ,console.log(data)})
   
  });

  return (
    <div className='dinu'>
       <div className="bollywood">
      {data.map((item) => {
        return (
          <div key={item.id} onClick={()=>handlenavigate(item.id,item)}>
            <GenericPages
              content={item.content}
              id={item.id}
              url={item.url}
              date={item.date}
              about={item.about}
              caption={item.caption}
              category={item.category}
             alt={item.alt}
            
            />

          </div>
        )
      })}
  
    
      </div>
      <GenericAdds adds={adds } video={videos } topposts={ posts} />
    </div>
  )
}

export default Technology
