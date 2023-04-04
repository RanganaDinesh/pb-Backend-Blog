import { useState, useEffect } from "react";
import React from "react";
import "./TheLatest.css"
const TheLatest = ({articles}) => {
    const [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
      setArticlesData(articles);
    }, [articles]);
    return (
        <>
            <div>
                <h2 className='post-head'><span className='post-line'>The</span> Latest</h2>
                
            </div>
      <div id='post-display'>
      {articlesData.map((article, index) => {
        
      return(  <div>
        <div className='post-box' key={index} id='post-box'>
        <div className='post-img'>
                <img className='post-img' id='post-img' src={article.url} alt={article.alt} />
        </div>
        <div>
        <a href={article.link}className='post-a' id='a'> <h3 className='post-header' id="post-header"> {article.caption}</h3></a>
        <p className='post-pre'>
        {article.about}
        </p>

        <span className='post-span'>{article.category} <span className='post-span1'>{article.date}</span></span>
        </div>
        </div>
        </div>)})}
      
          

            </div>
            
            </>
  )
}

export default TheLatest
