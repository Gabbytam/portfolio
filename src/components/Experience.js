import React, {useState} from 'react'

function Experience({title, company, date, bullet1, bullet2}) {
    const [clicked, setClicked] = useState(false)
    const [arrow, setArrow] = useState('↓')

    const displayBullet = () => {
        let toggle = clicked === true ? false : true;
        setClicked(toggle);
        let togArrow = arrow === '↑' ? '↓' : '↑';
        setArrow(togArrow);
    }
     
    return (
        <div className='exp-item'>
            <h4 className='job-title'>{title}</h4>
            <i>{company} | {date}</i>
            <ul className='job-bullet' style={ clicked === true ? {display: ''} : {display:'none'}}>
                <li>{bullet1}</li>
                <li>{bullet2}</li>
            </ul>
            <h2 id='arrow' onClick={()=> displayBullet()}>{arrow} </h2>
        </div>
    )
}

export default Experience

