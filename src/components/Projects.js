import React from 'react'

//component import
import Project from '../components/common/Project'

function Projects() {
    //have an object of all the info for my 3 projects 
    //map through that and create a Project component for each one
    const projectInfo = {
        uno: {
            image: '/images/projects/uno.png',
            liveSite: 'https://gabbytam.github.io/project_UNO_game/',
            github: 'https://github.com/Gabbytam/project_UNO_game',
            description: ''
        },
        hike: {
            image: 'origjw',
            liveSite: 'https://hike-washington-trails-365.herokuapp.com/',
            github: 'https://github.com/Gabbytam/hike_washington_trails_365',
            description: ''
        }
    }
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <Project img={projectInfo.uno.image} liveSiteUrl = {projectInfo.uno.liveSite} githubUrl={projectInfo.uno.github}/>
            
        </div>
    )
}

export default Projects

//carousel/click next of projects 