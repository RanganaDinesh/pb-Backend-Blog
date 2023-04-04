import React from 'react'
// import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FoodData } from '../../Api-Data/FoodData';
import GenericAdds from '../../GenericComponent/GenericAdds'
import GenericPages from '../../GenericComponent/GenericPages'

const Food = () => {
  const Navigate = useNavigate()
  const handlenavigate = (id , item) => {
    Navigate(`/Details/${id}`,{
      state: { Details:item}

    })
  
  }
  const adds = require('../../Api-Data/food-page/adds-data.json');
  const videos = require('../../Api-Data/food-page/videos-data.json');
  const posts = require('../../Api-Data/food-page/posts-data.json')
  // const Food = require('../../Api-Data/Food-data.json')
  return (
    <div className='dinu'>
     <div className="bollywood">
      {FoodData.map((item) => {
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
      <GenericAdds adds={ adds} video={videos } topposts={posts } />
    </div>
  )
}

export default Food
