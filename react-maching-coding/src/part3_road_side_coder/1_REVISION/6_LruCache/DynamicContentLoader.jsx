import React, { useState } from 'react'

const DynamicContentLoader = () => {
    const [content, setContent] = useState([])

    async function loadContent(){
        await new Promise(resolve => setTimeout(resolve, 1000))
        const      
    }
  return (
    <div>
      
    </div>
  )
}

export default DynamicContentLoader
