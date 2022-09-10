import React, { useEffect, useState } from 'react'

const Detail = ({selectedOption}) => {
    const city = new URLSearchParams(Window.location.search).get('city')
  
    const renderDetails = async () => {
            const response = await fetch(`http://localhost:3000/cities/${city}`)
            const info = await response.json
            console.log(info)

            window.addEventListener('DOMContentLoaded' , () => renderDetails())
     }
    

   
        
    
  return (
    <h2></h2>
  )
 
}

export default Detail