import React from 'react'

//component import
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

function Home() {
    return (
        <div id='home'>
            <About/>
            <Projects/>
            <Resume/>    
        </div>
    )
}

export default Home
