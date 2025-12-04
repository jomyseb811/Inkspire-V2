'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Timeline = () => {
    const box1 = useRef(null);
    const box2 = useRef(null);

    useEffect(() => {
      
        if (!box1.current || !box2.current) return;

        const tl = gsap.timeline({ defaults: { duration: 1 } });

        tl.to(box1.current, { x: 200, backgroundColor: "red" })
          .to(box2.current, { y: 100, scale: 1.2 }, "-=0.5")
          .to(box1.current, { rotate: 360 });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div>
            <div 
                ref={box1} 
                className="Box1" 
                style={{ width: 100, height: 100, background: 'blue', margin: 20 }}
            />
            <div 
                ref={box2} 
                className="Box2" 
                style={{ width: 100, height: 100, background: 'green', margin: 20 }}
            />
        </div>
    );
};

export default Timeline;