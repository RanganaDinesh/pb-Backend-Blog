import React from 'react'
import imgdinu from '../../../Assets/dinu2.jpeg'
import Navbar from '../../HeaderComponents/Navbar'
import like from '../../../Assets/rythm.png'
import share from '../../../Assets/share.png'
import TheLatest from '../../pages/Home/TheLatest/TheLatest'

const Taggle2 = () => {
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
                    <h2 className='info-head'>Start Your New Adventure</h2>
                    <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
                  </div>
                  <div>
                      <img src="https://media.istockphoto.com/id/1383968693/photo/beautiful-view-of-clouds-and-fog-on-top-of-girnar-hills-during-monsoon-view-of-the-dattatreya.jpg?s=612x612&w=0&k=20&c=7S5jKEGTtc9t40c3YufWTV1ddIMLpRNphgZBSQ_pB5A=" alt=""  className='info-image'/>
                  </div>
                  <div>
                      <p className='info-pre'>
                      Hill station were mostly set up in India by british to get a respite from the heat and humidity. But hill station not only reduces the heat  Mandi is a popular hill station near Manali. Known for trekking and biking trips, it is a perfect weekend getaway for those looking to escape the mad crowd of the main tourist
                      </p>
            </div>
            <div>
                      <img src="https://images.unsplash.com/photo-1597637245724-beb1e10cb79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGlsbCUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt=""  className='info-image'/>
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

export default Taggle2
