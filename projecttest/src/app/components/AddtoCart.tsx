'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
const AddtoCart = () => {
  const Divref = useRef(null)
const btnref = useRef(null)

const handleEnter=()=> {
  gsap.to(btnref.current , {scale : 1.1 ,duration : 0.2});
};

const handleLeave = () => {
  gsap.to(btnref.current , {scale : 1 , duration :0.2});
};

const handelClick = () => {
  gsap.fromTo(btnref.current , {scale : 1} , {scale :0.9 ,duration : 0.1, yoyo :true , repeat : 1})
};

  useEffect(() => {
     gsap.from(Divref.current, {
      y: 550,
      duration: 2,
      ease: 'power2.in',
     })
  }, [])

  return (<>
    <div ref={Divref} className='p-5 my-5 bg-amber-300 text-black text-xl hover:bg-amber-800 '>
      <p>Amber</p>

    </div>
            <button ref={btnref} onMouseEnter={handleEnter} onMouseLeave={handleLeave}  onClick={handelClick} className='bg-amber-600'>Add to cart </button>
        </>    
  )
}

export default AddtoCart
