import React from 'react'
import imgdinu from '../../../Assets/dinu2.jpeg'
import Navbar from '../../HeaderComponents/Navbar'
import like from '../../../Assets/rythm.png'
import share from '../../../Assets/share.png'
import TheLatest from '../../pages/Home/TheLatest/TheLatest'

const Taggle3 = () => {
  const posts = require('../../Api-Data/Home-The-Latest.json')
  return (
    <div>
      <Navbar />
      <div className='info-like'>
        <span className='like-size'><img src={like} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;8.3 k</span>
        <br />
        <span className='like-size'><img src={share} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;  Share this article</span>

      </div>
      <div className='info-container'>
          <div>
              <div>
                    <h2 className='info-head'>Explore...................</h2>
                    <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
                  </div>
                  <div>
                      <img src="https://i.vimeocdn.com/video/903643345-ceb9401558f6c0bf06dc6e4e05d85b222bbac49e50bca1b178b0af40d04c7538-d_640x360.jpg" alt=""  className='info-image'/>
                  </div>
                  <div>
                      <p className='info-pre'>
                      Adventuring not only expands your mind by building up your bravery, but is also an opportunity to grow and learn. New environments and cultures are packed full of meaningful life lessons that you might not be exposed to in your everyday life. Adventures expand the way we see and interact with the world.
                      </p>
            </div>
            <div>
                      <img src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt=""  className='info-image'/>
                  </div>
                  <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
            </div>
          
              
              </div>
              


          </div>
      
      </div>
      <div className='footer-info'>
        <TheLatest articles={posts}/>

      </div>
    </div>
  )
}

export default Taggle3
