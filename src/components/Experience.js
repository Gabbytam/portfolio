import React, {useState} from 'react'

import { motion, AnimatePresence } from "framer-motion"

function Experience({title, company, date, bullet1, bullet2}) {
    const [clicked, setClicked] = useState(false)
    const [arrow, setArrow] = useState('↓')

    const displayBullet = () => {
        let toggle = clicked === true ? false : true;
        setClicked(toggle);
        let togArrow = arrow === '↑' ? '↓' : '↑';
        setArrow(togArrow);
    }

    const variants = {
        //hidden property is essentially the initial property (can be named anything)
        hidden: { opacity: 0 },
        //visible property is essentially the animate properties (can be named anything)
        visible: { opacity: 1,
            //declare transition property INSIDE animate/visible property
            transition: {
                type: 'spring',
                duration: 2
            }
        },
        exit: {opacity: 0}
    }
    

    return (
        // <div className='exp-item'>
        //     <h4 className='job-title'>{title}</h4>
        //     <i>{company} | {date}</i>
        //     <ul className='job-bullet' style={ clicked === true ? {display: ''} : {display:'none'}}>
        //         <li>{bullet1}</li>
        //         <li>{bullet2}</li>
        //     </ul>
        //     <h2 id='arrow' onClick={()=> displayBullet()}>{arrow} </h2>
        // </div>
        <div className='exp-item'>
            <h4 className='job-title'>{title}</h4>
            <i>{company} | {date}</i>
            <AnimatePresence>
            {clicked && (
                <motion.ul className='job-bullet' variants={variants} initial='hidden' animate='visible' exit='exit'>
                    <li>{bullet1}</li>
                    <li>{bullet2}</li>
                </motion.ul>
            )}
            </AnimatePresence>
            
            
            <motion.h2 id='arrow' onClick={()=> displayBullet()}>{arrow} </motion.h2>
        </div>
    )
}

export default Experience

