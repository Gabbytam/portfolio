import React from 'react'


//component import
import Project from '../components/common/Project'

//import carousel from package
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Projects() {
    //variable for sizing the carousel component 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
            title: 'UNO',
            image: '/images/projects/uno.png',
            liveSite: 'https://gabbytam.github.io/project_UNO_game/',
            github: 'https://github.com/Gabbytam/project_UNO_game',
            description: 'Front end online version of the very famous card game, UNO. With a focus on DOM manipulation, users are able to make decisions with clicks and have the game unfold before them. Mimicked game functionality includes deck shuffling, playing cards, drawing cards, wild card choice handling, win logic, and play again.',
            tech: ['JavaScript', 'HTML', 'CSS']
        },
        hike: {
            title: 'HIK3 WASHIN6TON TRAIL5',
            // image: '/images/projects/hike.png',
            image: '/images/projects/hikehome.png',
            liveSite: 'https://hike-washington-trails-365.herokuapp.com/',
            github: 'https://github.com/Gabbytam/hike_washington_trails_365',
            description: 'Back end project designed to show a library of hikes in Washington state separated by which season they are best suited for so that hikers can enjoy the outdoors year round. This web application allowed users to create an account to save and blog about hikes as well as view a personalized seasonal calendar.',
            tech: ['Express', 'Node.js', 'PostgreSQL', 'Sequelize']
        },
        career: {
          title: '.find(career)',
          image: '/images/projects/project3.png',
          liveSite: 'https://findcareer.surge.sh/',
          github: 'https://github.com/orgs/SFX818/teams/charoniles-angels/repositories',
          description: 'Group collaboration to create a full-stack web application that helps prospective software engineers in their job search. This app allows users to search for available jobs and keep track of the status of jobs saved. It also offers a way for users to keep track of the network they build, goals they set, and offers a notes section.',
          tech: ['React', 'Node.js', 'Mongoose', 'Mongo']
      }
    }
    return (
        <div id='projects'>
            <h1 id='projects-header'>Explore My Projects</h1>
            <Carousel responsive={responsive}>
                <div><Project title = {projectInfo.career.title} img={projectInfo.career.image} description = {projectInfo.career.description} liveSiteUrl = {projectInfo.career.liveSite} githubUrl={projectInfo.career.github} skills = {projectInfo.career.tech}/></div>
                
                <div><Project title = {projectInfo.hike.title} img={projectInfo.hike.image} description = {projectInfo.hike.description} liveSiteUrl = {projectInfo.hike.liveSite} githubUrl={projectInfo.hike.github} skills = {projectInfo.hike.tech}/></div>

                <div><Project title = {projectInfo.uno.title} img={projectInfo.uno.image} description = {projectInfo.uno.description} liveSiteUrl = {projectInfo.uno.liveSite} githubUrl={projectInfo.uno.github} skills = {projectInfo.uno.tech}/></div>
            </Carousel>
            
            
        </div>
    )
}

export default Projects

//carousel/click next of projects 