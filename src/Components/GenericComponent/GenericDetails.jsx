import React from 'react'
import { useLocation ,useParams } from 'react-router-dom'

const GenericDetails = () => {
    const param = useParams()
    const Location = useLocation()
    console.log( "Param", param,Location)
  return (
      <div>
          <h1>{Location.state.Details.caption}</h1>
          <img src={Location.state.Details.url} alt="" />
      
    </div>
  )
}

export default GenericDetails
