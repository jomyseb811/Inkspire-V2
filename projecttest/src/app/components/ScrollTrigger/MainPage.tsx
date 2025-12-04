'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ScrollBoxes = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000', 
          scrub: true,
          pin: true,
          snap: 1 / 2, 
        //   markers: true,
        },
      })

      tl.to('.box1', { xPercent: -100, opacity: 0, duration: 1 })
        .from('.box2', { xPercent: 100, opacity: 0, duration: 1 }, '<')
        .to('.box2', { xPercent: -100, opacity: 0, duration: 1 })
        .from('.box3', { xPercent: 100, opacity: 0, duration: 1 }, '<')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
    <section ref={containerRef} className="w-screen h-screen overflow-hidden relative">
      <div className="box box1 absolute w-full h-full flex items-center justify-center bg-red-500 text-white text-4xl">
        Box 1
      </div>
      <div className="box box2 absolute w-full h-full flex items-center justify-center bg-blue-500 text-white text-4xl">
        Box 2
      </div>
      <div className="box box3 absolute w-full h-full flex items-center justify-center bg-green-500 text-white text-4xl">
        Box 3
      </div>
    
    </section>
    <section className="w-screen h-screen overflow-hidden relative">
          <div className="box box4 absolute w-full h-full flex items-center justify-center bg-blue-500 text-white text-4xl">
        Box 4
      </div>
    </section>
</>
  )
}

export default ScrollBoxes
