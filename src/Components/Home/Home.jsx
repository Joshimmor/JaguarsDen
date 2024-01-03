import React, { useRef } from "react";
import {useScroll, useTransform,motion, useViewportScroll,circOut,easeIn } from "framer-motion"
import "./Home.css"
export default function Home() {
    const ref = useRef(null);
    const { scrollY } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const { scrollYProgress } = useViewportScroll();
    const y1 = useTransform( scrollYProgress, [0, 1], ["0%", "74%"],{ ease: easeIn });
    const y2 = useTransform( scrollYProgress, [0, 1], ["0%", "50%"],{ ease: easeIn });
    const y3 = useTransform( scrollYProgress, [0, 1], ["0%", "64%"],{ ease: easeIn });

  
    return (
        <div
        ref={ref}
        className="home-hero">
            <div className="landing-hero">
                <h1>JASON</h1>
                <h1>JASON</h1>
                <h1>JASON</h1>
            </div>
            <motion.div className="top-tree-hero"
                style={{
                    y:y3,
                    paddingTop:'60px'
                }}
            >
                <div
                style={{
                    backgroundImage:'url(/LEFTT.png)',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'left',
                    backgroundPositionY: 'top',
                    backgroundSize:'contain',
                    backgroundColor:"rgb(255, 255, 255,0.15)",
                    backgroundBlendMode:"saturation",
                    width:'25%',
                    height:"100vh",
                }}
                />
                <div
                style={{
                    backgroundImage:'url(/RIGHTT.png)',
                    backgroundPosition:'right',
                    backgroundRepeat:'no-repeat',
                    backgroundPositionY: 'top',
                    backgroundSize:'contain',
                    backgroundColor:"rgb(255, 255, 255,0.15)",
                    backgroundBlendMode:"saturation",
                    width:'25%',
                    height:"100vh",
                   
                }}
                />
            </motion.div>
            <motion.div className="top-tree-hero"
                style={{
                    y:y2
                }}
            >
                <div
                style={{
                    backgroundImage:'url(/LEFTT.png)',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'left',
                    backgroundPositionY: 'top',
                    backgroundSize:'contain',
                    width:'40%',
                    height:"100vh"
                }}
                />
                <div
                style={{
                    backgroundImage:'url(/RIGHTT.png)',
                    backgroundPosition:'right',
                    backgroundRepeat:'no-repeat',
                    backgroundPositionY: 'top',
                    backgroundSize:'contain',
                    width:'40%',
                    height:"100vh"
                }}
                />
            </motion.div>
            <motion.div className="bottom-tree-hero"
                    style={{
                        y:y1
                    }}
            >
                <div
                style={{
                    backgroundImage:'url(/Llighttree.png)',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'left',
                    backgroundPositionY: '100px',
                    backgroundSize:'contain',
                    width:'20%',
                    height:"100vh"
                }}
                />
                <div
                style={{
                    backgroundImage:'url(/LighttreeR.png)',
                    backgroundPosition:'right',
                    backgroundRepeat:'no-repeat',
                    backgroundPositionY: '100px',
                    backgroundSize:'contain',
                    width:'20%',
                    height:"100vh"
                }}
                />
            </motion.div>
        </div>
      );
}
