import React, { useEffect, useState } from 'react'

const InfiniteScrollWithScrollheight = () => {
    const [isFinished, setIsFinished] = useState(false)
    useEffect(() => {
        function handleScroll(e){
            
        }
        window.addEventListener('scroll' , handleScroll)
    })
  return (
    <div>
      
    </div>
  )
}

export default InfiniteScrollWithScrollheight
