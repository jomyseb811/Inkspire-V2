'use client'


import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(Observer)

const images = [
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Acts-Of-God-Kanan-Gill-Buy-Online-Bookbins.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/The-Subtle-Art-Of-Not-Giving-A-F-ck-Mark-Manson-Buy-Online-Bookbins.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Think-Like-A-Monk-Jay-Shetty-Buy-Online-Bookbins.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/AfterLives-Abdulrazak-Gurnah-Buy-Online-Bookbins-1.png',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Attitude-Is-Everything-Jeff-Keller-Buy-Online-Bookbins.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Everything-Is-Fucked-A-Book-About-Hope-Mark-Manson-Buy-Online-Bookbins-300x300.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/A-Thousand-Boy-Kisses-Tillie-Cole-Buy-Online-Bookbins-300x300.jpg',
  'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Get-Epic-Shit-Done-Do-Epic-Shit-Combo-Ankur-Warikoo-Buy-Online-Bookbins-1.jpg',
]

const SlideIn = () => {
  const TitleRef = useRef<HTMLHeadingElement | null>(null)
  const TextRef = useRef<HTMLDivElement | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const imageRefs = useRef<HTMLDivElement[]>([])
  const progress = useRef({ value: 0 })
  const radius = 242

const pathname = usePathname()

  useEffect(() => {
    // Title + text animation
    const tl = gsap.timeline()

    if (TitleRef.current) {
      tl.from(TitleRef.current, {
        y: 300,
        ease: 'power2.out',
        duration:0.9,
      })
    }

    if (TextRef.current) {
      const lines = gsap.utils.toArray(TextRef.current.querySelectorAll('h1'))
      tl.from(
        lines,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        },
        '-=0.5'
      )
    }

    // 3D carousel animation
    const carousel = carouselRef.current
    if (!carousel) return

    Observer.create({
      target: carousel,
      type: 'wheel,pointer',
      onPress: () => (carousel.style.cursor = 'grabbing'),
      onRelease: () => (carousel.style.cursor = 'grab'),
      onChange: (self) => {
        gsap.killTweensOf(progress.current)
        const delta =
          self.event.type === 'wheel'
            ? self.deltaY * -0.0005
            : self.deltaX * 0.05

        gsap.to(progress.current, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${delta}`,
        })
      },
    })

    const animate = () => {
      imageRefs.current.forEach((el, index) => {
        const theta = index / images.length - progress.current.value
        const x = -Math.sin(theta * Math.PI * 2) * radius
        const z = Math.cos(theta * Math.PI * 2) * radius
        el.style.transform = `translate3d(${x}px, 0px, ${z}px) rotateY(${
          -360 * theta
        }deg)`
        const hue = Math.floor((index / images.length) * 360)
        el.style.background = `hsla(${hue}, 90%, 50%, 0.5)`
      })
    }

    gsap.ticker.add(animate)
    return () => gsap.ticker.remove(animate) 
  }, [pathname])

  return (
    <>
    
 <div className="w-full bg-amber-400 h-32 flex  justify-around font-extrabold overflow-hidden ">
  
    <h1 ref={TitleRef} className="text-9xl">inkspire</h1>


  </div>

      {/* Animated Text Lines */}
      <div className='h-screen flex items-center justify-center mb-6'>
        <div
          ref={TextRef}
          className='text-center max-w-screen-md px-4 break-words text-4xl font-bold'
        >
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-violet-400'>
            Got inspired by ink? Why don’t take
          </h1>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-violet-400'>
            Inkspire, be the one who innovates and
          </h1>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-violet-400'>
            change the world with boundless
          </h1>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-violet-400'>
            knowledge. So what do you think?
          </h1>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-violet-400'>
            Get inspired by Inkspire!
          </h1>
        </div>
      </div>
        {/* <h1 className='font-medium text-5xl flex justify-center'>La</h1> */}

      {/* 3D Carousel */}
      <section>
        <div
          ref={carouselRef}
          className='w-full h-screen flex justify-center items-center select-none cursor-grab font-serif max-[600px]:[transform:rotateX(-10deg)_scale(0.6)_translateY(-60px)]'
          style={{
            transform: 'rotateX(-20deg) translateY(-70px)',
            transformStyle: 'preserve-3d',
            perspective: '800px',
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
             ref={(el) => {
  if (el) imageRefs.current[i] = el
}}
              className='carousel-image absolute w-40 h-60 rounded-xl overflow-hidden shadow-md'
            >
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default SlideIn
