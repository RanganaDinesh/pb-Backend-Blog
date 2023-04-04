// import React from 'react'
// import GenericPages from '../../GenericComponent/GenericPages'
// import GenericAdds from '../../GenericComponent/GenericAdds'

// const Bollywood = () => {



//   //
  // const adds = require('../../Api-Data/bollywood/adds-data.json');
  // const videos = require('../../Api-Data/bollywood/video.json');
  // const posts = require('../../Api-Data/bollywood/topposts-data.json')
//   const bollywood = require('../../Api-Data/bollywood-posts.json')
//   return (
//     <div className='dinu'>
//       <GenericPages articles={bollywood} />
//       <GenericAdds adds={ adds} video={ videos} topposts={posts } />
//     </div>
//   )
// }

// export default Bollywood

import { BollywoodData } from "../../Utility/ArticlesData/BollywoodArticles";   
import GenericPages from "../../GenericComponent/GenericPages";
// import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import GenericAdds from '../../GenericComponent/GenericAdds'
// import axios from 'axios';
 
const Bollywood = () => {


  const Navigate = useNavigate()
  const handlenavigate = (id , item) => {
    Navigate(`/Details/${id}`,{
      state: { Details:item}

    })
  
  }

  const adds = require('../../Api-Data/bollywood/adds-data.json');
  const videos = require('../../Api-Data/bollywood/video.json');
  const posts = require('../../Api-Data/bollywood/topposts-data.json')
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/Bollywood").then(res=>res.json()).then(data=>{setData(data) ,console.log(data)})
   
  // });

  return (
    <>    

    <div className='dinu'>
    <div className="bollywood">
      {BollywoodData.map((item) => {
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
     
      <span className='arrow' style={{ color: '#908D8D', marginTop: '200px', fontSize: "15px", marginLeft: '260px' }}><span style={{ color: 'red' }}>&#8595;</span>  Load More</span> 
      </>

      )
}

export default Bollywood
