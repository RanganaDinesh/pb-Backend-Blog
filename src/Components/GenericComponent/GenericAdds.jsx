import React from 'react'
import { useState,useEffect } from 'react'
import '.././GenericComponent/Genericadds.css'


const GenericAdds = ({adds ,topposts,video }) => {
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
        <div id='nonn'>
              <div >
        
          
        
          
        
                  
          </div>
          <div  id='add-head'>
        <h3 style={{borderBottom:'2px solid red',width:'80px',fontSize:'20px',paddingBottom:'15px'}}>Top Post</h3>
        </div>
              <div >
                  {postsData.map((topposts, index) => {
                      return (
                          <>
                              <div key={index}>
                        <img src={topposts.url} alt=""  id='img-add' />
                       <a href={topposts.link}> <h2 id='add-header'>{topposts.caption}</h2></a>
                      
                              <span id='add-day'>{topposts.category}<span id='add-ct'>{ topposts.date}</span></span>
                              </div> 
                        </>
                           )  })}
        </div >
          </div>


          {addsData.map((adds, index) => {
                  return ( <div id='add-posts'key={index}>
             
                      <div id='divide' >
                          <img src={adds.url} alt={adds.alt} id='add-subimg' />
                          <div>
                              <h2 id='add-head1'>{adds.caption} </h2>
                              <span id='add-day'>{adds.category}<span id='add-ct'>{ adds.date}</span></span>
                          </div>
                      </div>

            </div>)
          })}
      


      <>
        <div id='box-bt'>
        {videoData.map((video, index) => {
            return (<div key={index} > <video id='img-add1' src={video.url } loop autoPlay muted ></video></div>)
          })} 



        </div>
      
      
      
      
      </>
      
    </div>
  )
}

export default GenericAdds
