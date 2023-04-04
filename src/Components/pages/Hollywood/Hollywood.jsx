import React from 'react'
// import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'
// import { useState } from 'react';
// import { useEffect } from 'react';

import { HollywoodData } from '../../Utility/ArticlesData/HollywoodData';

const Hollywood = () => {
  const Navigate = useNavigate()
  const handlenavigate = (id , item) => {
    Navigate(`/Details/${id}`,{
      state: { Details:item}

    })
  
  }
  // const Hollywood = require('../../Api-Data/Hollywood-data.json')
  const adds = require('../../Api-Data/hollywood/adds-data.json');
  const videos = require('../../Api-Data/hollywood/videos-data.json');
  const posts = require('../../Api-Data/hollywood/posts-data.json')
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/Hollywood").then(res => res.json()).then(data => { setData(data); console.log(data)})
   
  // });
  return (
      <div className='dinu'>
      <div className="bollywood">
      {HollywoodData.map((item) => {
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
      <GenericAdds adds={ adds} video={ videos} topposts={ posts} />
      
    </div>
  )
}

export default Hollywood
