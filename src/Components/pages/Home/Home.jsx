import React from 'react'
import { Link } from 'react-router-dom'
import HomePageAdds from '../../Adds/HomePageAdds';
import LatestArticles from '../../LatestArticles/HomePageLatestArticles/LatestArticles';
import Images from '../../LatestArticles/ImageSlide/Images';

import TheLatest from './TheLatest/TheLatest'

const Home = () => {

  const articleLink  = require('../../Api-Data/Home-The-Latest.json');
  const articleposts = require('../../Api-Data/LatestArticles-Home.json');
  const Adds = require('../../Api-Data/adds-Home.json');
  const Videos = require('../../Api-Data/Video-adds.json');
  const Topposts = require('../../Api-Data/Top-posts.json');
  const images = require('../../Api-Data/slide-images.json');
  
  return (
      <>
      
          <div id='kiku'>
       
          <div className='mainheadingimg'>
              <Link to='/Taggle1'>
                   
              <img className='headimg1' id='img1-home' src="https://media.istockphoto.com/id/1216022853/photo/kolli-hills-kollimalai-seventy-hairpin-bends-located-in-central-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=v6W8Nz3E9TFSHIeLlxWCU3UXekEwdmj2H0kWdBYfebk=" alt="" />
              <div className='text-on-img1'>
                <h2> Tamilnadu Tourism</h2>
                    <br />
                <span>Travel/Feb 20 2023</span> 
              </div> <br /><br />
              </Link>
              

              <div>
                  <Link to='/Taggle2' >
                      
                      
                  <img src="https://media.istockphoto.com/id/1383968693/photo/beautiful-view-of-clouds-and-fog-on-top-of-girnar-hills-during-monsoon-view-of-the-dattatreya.jpg?s=612x612&w=0&k=20&c=7S5jKEGTtc9t40c3YufWTV1ddIMLpRNphgZBSQ_pB5A=" alt="" className='headimg2'id='img2-home' /> <br /> <br />
                  <h3 className='text-on-img2'> Explore  on Hills</h3> <br /><br />
                  <span  className='text-on-img2'>Travel/Feb 20 2023</span> 
                  </Link>
                  
                  <Link to='/Taggle3'>
                  <img src="https://i.vimeocdn.com/video/903643345-ceb9401558f6c0bf06dc6e4e05d85b222bbac49e50bca1b178b0af40d04c7538-d_640x360.jpg" alt="" className='headimg2'id='img2-home' style={{ marginTop: '-50px' }} />
                  <h3 className='text-on-img2'> Explore on Skys</h3>
                  <br /><br />
                  <br />
                  <span  className='text-on-img2'>Travel/Feb 20 2023</span> 
                  </Link>
            </div>
        </div>
        
        <Link to='/Taggle3'  style={ {textDecoration:'none'}}>
      {/*  */}
      {/* // the latest selction posts*/}
          <TheLatest articles={articleLink} />
      {/* / the latest Articles/ */}
      <div className='art'>
        <div>
          <LatestArticles articles={articleposts} />
          <Images images={images}/>
        </div>
        <div>
          <HomePageAdds adds={Adds} video={Videos} topposts={Topposts} />
        
        </div>
        
      </div>
      <div id='jashu'>
      <h1 style={{ fontFamily: 'sans-serif', marginLeft: '150px' }}><span style={{borderBottom:'3px solid red',paddingBottom:'20px'}} >Latest</span> Stories</h1>
  
     
      <div style={{margin:'50px 150px 100px 150px',width:'85%',display:'flex',justifyContent:'space-evenly', borderTop: '3px solid #F0F0F0',borderBottom: '3px solid #F0F0F0',paddingTop:'80px',paddingBottom:'100px' }} id='footer-main'>
        <div style={{width:'450px' , borderRight:'3px solid #F0F0F0',marginRight:'30px'}}>
          <h2 style={{color:'#000000',fontSize:'25px',marginTop:'20px',marginBottom:'20px'}}>The Holy City of Varanasi</h2>
          <p style={{color:'#908D8D',fontSize:'14px',marginTop:'20px',marginBottom:'20px',paddingRight:'20px'}}>Dating back to the 8th century BC, Varanasi is one of the oldest still inhabited cities in the world. A major pilgrimage center for Hindus, this holy city has long been associated with the mighty Ganges River, one of the faith's most important religious symbolsAlso worth seeing is Banaras Hindu University, established in 1917 .</p>
          <span style={{color:'#000000',fontSize:'14px'}}>Travel<span style={{color:'#908D8D',fontSize:'14px'}}>/feb 03 2023</span></span>
        </div>
        <div style={{width:'450px', borderRight:'3px solid #F0F0F0',marginRight:'30px'}}>
          <h2 style={{color:'#000000',fontSize:'25px' ,marginTop:'20px',marginBottom:'20px'}}>The Red Fort, New Delhi</h2>
          <p style={{color:'#908D8D',fontSize:'14px',marginTop:'20px',marginBottom:'20px',paddingRight:'20px'}}>Built by Shah Jahan in 1648 as the seat of Mughal power – a role it maintained until 1857 – the magnificent crescent-shaped Red Fort in New Delhi, named after the stunning red sandstone used in its construction, covers a vast area of more than two square kilometers, all of it surrounded by a large moat.</p>
          <span style={{color:'#000000',fontSize:'14px'}}>Travel<span style={{color:'#908D8D',fontSize:'14px'}}>/feb 03 2023</span></span>
        </div>
        <div style={{width:'450px'}}>
          <h2 style={{color:'#000000',fontSize:'25px',marginTop:'20px',marginBottom:'20px'}}>Mumbai The Gateway of India</h2>
          <p style={{color:'#908D8D',fontSize:'14px',marginTop:'20px',marginBottom:'20px'}}>Standing an impressive 26 meters tall and overlooking the Arabian Sea, the iconic Gateway of India is a must-see when in Mumbai. Built to commemorate the arrival of King George V and his wife Queen Mary in 1911, this stunning piece of architecture was opened with much pomp and ceremony in 1924</p>
          <span style={{color:'#000000',fontSize:'14px',bottom:'0px'}}>Travel<span style={{color:'#908D8D',fontSize:'14px'}}>/feb 03 2023</span></span>
        </div>
        </div>
        </div></Link>
        </div>
      </>
  )
}

export default Home
