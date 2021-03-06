import React from 'react'

import ImageGallery from 'react-image-gallery';

import Project from '../components/common/Project';

function Gallery() {

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

    const showInfo = (proj) => {
        proj = proj.originalTitle;
          return <Project
            title = {projectInfo[proj].title} img={projectInfo[proj].image} description = {projectInfo[proj].description} liveSiteUrl = {projectInfo[proj].liveSite} githubUrl={projectInfo[proj].github} skills = {projectInfo[proj].tech}
          />
      }

      const images = [
        {
          original: '/images/projects/project3.png',
          thumbnail: '/images/projects/project3.png',
          originalClass: 'carousel-img',
          originalTitle: 'career'
        },
        {
          original: '/images/projects/hikehome.png',
          thumbnail: '/images/projects/hikehome.png',
          originalClass: 'carousel-img',
          originalTitle: 'hike',
        },
        {
          original: '/images/projects/uno.png',
          thumbnail: '/images/projects/uno.png',
          originalClass: 'carousel-img',
          originalTitle: 'uno',
        },
      ];
    return (
        <div id='carousel'>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} renderItem={showInfo} />
        </div>
    )
}

export default Gallery
