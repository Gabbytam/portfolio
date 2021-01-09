import React from 'react'

//component import
import Project from '../components/common/Project'

//import carousel from package
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Projects() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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
            <Carousel responsive={responsive}>
                <div><Project img={projectInfo.uno.image} liveSiteUrl = {projectInfo.uno.liveSite} githubUrl={projectInfo.uno.github}/></div>
                <div>Project 2</div>
                <div>Project 3</div>
            </Carousel>
            
            
        </div>
    )
}

export default Projects

//carousel/click next of projects 