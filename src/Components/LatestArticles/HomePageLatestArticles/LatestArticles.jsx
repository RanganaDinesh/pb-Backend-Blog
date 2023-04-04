import React  from 'react'
import './LatestArticle.css'
import { useState, useEffect } from 'react';
import imgdown from '../../.././Assets/arrow.png'




const LatestArticles = ({articles}) => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);
  return (
    <>
      <h2 className='Article-head'><span className='Article-line'>Latest</span> Article</h2>
      {articlesData.map((article, index) => {
        return (
          <div className='Article-container'  key={index} >

            <div id='Article-img1' >
              <img src={article.url} alt={article.alt} id='Article-img' />
            </div>
            <div>
              <a href={article.link} className='Article-a' id='Article-a'> <h2 className='Article-header' id='Article-header'>{article.caption}</h2></a>
              <p className='Article-pre' id='Article-pre'>{ article.about}</p>
              <span className='Article-span'>{article.category}<span className='Article-span1'>{article.date}</span></span>
            </div>
          </div>)
      })}
      
      <span style={{ color: '#908D8D', marginTop: '200px', fontSize: "15px", marginLeft: '260px' }}><img src={imgdown} alt=""  />  Load More</span>
      
      </>
  )
}

export default LatestArticles

