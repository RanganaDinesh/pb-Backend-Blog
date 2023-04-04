// import React  from 'react'
// import '../GenericComponent/Genericstyle.css'
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import imgdown from '../../../src/Assets/arro'

// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// //




// const GenericPages = ({ articles }) => {
 
//   const [articlesData, setArticlesData] = useState([]);
//   //

 
//   useEffect(() => {
//     setArticlesData(articles);
//   }, [articles]);
//   return (
//     <>
//       <div className='view-gen'>
    
//       {articlesData.map((articles, index ) => {
//         return (
//           <>
//             <Link to={`/articles`} style={{textDecoration:'none'}}>      <div>  <h2 className='generic-head'><span className='Article-line'>{articles.content}</span> </h2></div>
//           <div className='generic-container' key={index}  id='generic-box'>
              
//             <div className='Article-img' >
//               <img src={articles.url} alt={articles.alt} className='Article-img' />
//             </div>
//             <div>
//               <a href={articles.link} className='Article-a'> <h2 className='Article-header'>{articles.caption}</h2></a>
//               <p className='Article-pre'>{ articles.about}</p>
//               <span className='Article-span'>{articles.category}<span className='Article-span1'>{articles.date}</span></span>
//             </div> 
//             </div>
//             </Link>
//           </>
// )
//       })} 
//          <span className='arrow' style={{ color: '#908D8D', marginTop: '200px', fontSize: "15px", marginLeft: '260px' }}><span style={{color:'red'}}>&#8595;</span>  Load More</span>
//         </div>
      
    
      
//       </>
//   )
// }

// export default GenericPages

import React  from 'react'
import '../GenericComponent/Genericstyle.css'
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import imgdown from '../../../src/Assets/arro'

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

//




const GenericPages = ({ id,content, url, date,about, caption , category,alt  }) => {
 
  // const [articlesData, setArticlesData] = useState([]);
  // //

 //
  // useEffect(() => {
  //   setArticlesData(articles);
  // }, [articles]);
  return (
    <>
      <div className='view-gen'>
    
     
          <>
               <div>  <h2 className='generic-head'><span className='Article-line'>{content}</span> </h2></div>
          <div className='generic-container' id='generic-box'>
              
            <div className='Article-img' >
              <img src={url} alt={alt} className='Article-img' />
            </div>
            <div>
              <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className='Article-a'> <h2 className='Article-header'>{caption}</h2></a>
              <p className='Article-pre'>{about}</p>
              <span className='Article-span'>{category}<span className='Article-span1'>{date}</span></span>
            </div> 
            </div>
        
          </>

         
        </div>
      
    
      
      </>
  )
}

export default GenericPages

