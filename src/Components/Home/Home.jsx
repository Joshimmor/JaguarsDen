import React, { useRef } from "react";
import {useScroll, useTransform,motion} from "framer-motion"
import "./Home.css"
export default function Home() {
    const ref = useRef(null);
    const { scrollY } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollY, [0, 200], [0, 100]);
    const y2 = useTransform(scrollY, [0, 255], [0, 100]);
  

  
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
                    top:`${y2} px`
                }}
            >
                <div
                style={{
                    backgroundImage:'url(/LEFTT.png)',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'left',
                    backgroundPositionY: 'top',
                    backgroundSize:'contain',
                    width:'30%',
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
                    width:'30%',
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
