import React from 'react'
// import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FitnessData } from '../../Api-Data/FitnessData';
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Fitness = () => {
  const Navigate = useNavigate()
  const handlenavigate = (id , item) => {
    Navigate(`/Details/${id}`,{
      state: { Details:item}

    })
  
  }
  const adds = require('../../Api-Data/fitness/adds-data.json');
  const videos = require('../../Api-Data/fitness/videos.json');
  const posts = require('../../Api-Data/fitness/topposts.json')
  // const Fitness = require('../../Api-Data/fitness-data.json')
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/Bollywood").then(res => res.json()).then(data => { setData(data); console.log(data)})
   
  // });
  
  return (
    <div className='dinu'>
      <div className="bollywood">
      {FitnessData.map((item) => {
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
      <GenericAdds adds={ adds} video={ videos} topposts={posts } />
    </div>
  )
}

export default Fitness
