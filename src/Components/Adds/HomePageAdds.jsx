import React from 'react'
import { useState,useEffect } from 'react'
import '../../Components/Adds/HomePageAdds.css'


const HomePageAdds = ({adds ,topposts,video }) => {
    const [addsData, setAddsData] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [videoData, setvideoData] = useState([]);
    useEffect(() => {
        setAddsData(adds);
      }, [adds]);
    useEffect(() => {
        setPostsData(topposts);
      }, [topposts]);
    useEffect(() => {
        setvideoData(video);
      }, [video]);

  return (
      <div>
        <div className='nonn'>
              <div className='box-add'>
          <h2>Advertistement</h2>
          
        
          
          {videoData.map((video, index) => {
            return (<div key={index} > <video className='img-add1' src={video.url } loop autoPlay muted ></video></div>)
          })} 
                  
          </div>
          <div  id='add-head'>
        <h3 style={{borderBottom:'2px solid red',width:'80px',fontSize:'20px',paddingBottom:'15px'}}>Top Post</h3>
        </div>
              <div>
                  {postsData.map((topposts, index) => {
                      return (
                          <>
                              <div key={index}>
                        <img src={topposts.url} alt=""  className='img-add' />
                       <a href={topposts.link}> <h2 className='add-header'>{topposts.caption}</h2></a>
                      
                              <span className='add-day'>{topposts.category}<span className='add-ct'>{ topposts.date}</span></span>
                              </div> 
                        </>
                           )  })}
        </div >
          </div>


          {addsData.map((adds, index) => {
                  return ( <div className='add-posts'key={index}>
             
                      <div className='divide' >
                          <img src={adds.url} alt={adds.alt} className='add-subimg' />
                          <div>
                              <h2 className='add-head1'>{adds.caption} </h2>
                              <span className='add-day'>{adds.category}<span className='add-ct'>{ adds.date}</span></span>
                          </div>
                      </div>

          </div>         )     })}
      
    </div>
  )
}

export default HomePageAdds
