import React from 'react';
// import { Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Nav from '../pages/navbar/Nav';
import Bollywood from '../pages/Bollywood/Bollywood';
import Technology from '../pages/Technology/Technology'
import Hollywood from '../pages/Hollywood/Hollywood'
import Fitness from '../pages/Fitness/Fitness'
import Food from '../pages/Food/Food'
import Error from '../pages/Error'
import Taggle1 from '../TravelInformation/Travel-img-onclick-info/Taggle1'
import Taggle2 from '../TravelInformation/Travel-img-onclick-info/Taggle2'
import Taggle3 from '../TravelInformation/Travel-img-onclick-info/Taggle3'
// import GenericInfo from '../GenericComponent/GenericInfo';
import GenericInfo from '../GenericComponent/GenericInfo';
// import { Box } from '@mui/material';
// import GenericDetails from '../GenericComponent/GenericDetails';



function Router() {
  // const hollywood = require('../../Components/Api-Data/Hollywood-data.json')

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
        <Route index element={<Home />}/>
            <Route path="/Bollywood" element={<Bollywood/>}/>
            <Route path="/Technology" element={<Technology />}></Route>
            <Route path="/Hollywood" element={<Hollywood />}></Route>
            <Route path="/Fitness" element={<Fitness />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
        <Route path='/Taggle1' element={<Taggle1/>}></Route>
        <Route path='/Taggle2' element={<Taggle2/>}></Route>
        <Route path='/Taggle3' element={<Taggle3 />}></Route>
        {/* <Route path="/articles" element={<GenericInfo articles={hollywood}/>} /> */}
        <Route path='/Details/:id' element={<GenericInfo/>}/>
        {/* <Route path='/Details/:id' element={<GenericDetails/>}/> */}
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default Router;
