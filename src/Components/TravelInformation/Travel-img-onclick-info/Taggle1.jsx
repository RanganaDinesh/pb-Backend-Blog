import React from 'react'
import imgdinu from '../../../Assets/dinu2.jpeg'
import Navbar from '../../HeaderComponents/Navbar'
import like from '../../../Assets/rythm.png'
import share from '../../../Assets/share.png'
import TheLatest from '../../pages/Home/TheLatest/TheLatest'


const Taggle1 = () => {
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
                    <h2 className='info-head'>Tamilnadu Tourism</h2>
                    <div>
                      <img src={imgdinu} alt="" className='info-img' />
                      <span className='info-span'>Dinesh Karthik </span> <br /> 
                      <span className='info-span1'>  feb 02 2023 Read Last Time</span>
                      
                      
                  </div>
                  <div>
                      <img src="https://media.istockphoto.com/id/1216022853/photo/kolli-hills-kollimalai-seventy-hairpin-bends-located-in-central-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=v6W8Nz3E9TFSHIeLlxWCU3UXekEwdmj2H0kWdBYfebk=" alt=""  className='info-image'/>
                  </div>
                  <div>
              <p className='info-pre'>
              Meenakshi Amman Temple, Adi Kumbeswarar temple, Brihadeeswarar Temple, Ranganathaswamy Temple, Ekambareswarar Temple, Ramanathaswamy Temple, the group of Chola Temples, Mahabalipuram Temple and Srivilliputhur Andal Temple are some of the most popular pilgrimage destinations in Tamil Nadu.
                          
                      </p>
            </div>
            <div>
                      <img src="https://images.unsplash.com/photo-1603766806347-54cdf3745953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFtaWwlMjBuYWR1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""  className='info-image'/>
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

export default Taggle1
