'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


const GsapDemo = () => {
    const boxref = useRef(null)

    useEffect(() => {
        gsap.to(boxref.current, {
            x:200 ,
            duration : 3,
            yoyo: true,
            repeat : -1 ,
            ease :'power3.out'
        })
    } , [])
  return (
    <div className='p-8'>
 <img
 ref={boxref}
src= "./ProjectImages/swastika.png"
alt='swastika'
 className="w-48 h-auto rounded-lg shadow-lg"
 />
      </div>
  )
}

export default GsapDemo
