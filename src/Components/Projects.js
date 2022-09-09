import React from 'react';
import { 
  RunBuddy,
  Horiseon,
  Stockwise,
  KingsMile } from '../assets/Images'

// import ProjectCard from './pages/ProjectCard';
import Card from 'react-bootstrap/Card';


const Projects = () => {
   
  const projectInfo = [
  {
  appName: "Run Buddy",
  github: "https://github.com/mattgaither/run-buddy/",
  link: "https://mattgaither.github.io/run-buddy/",
  img: RunBuddy,
  alt: 'A picture of the Run Buddy homepage',
  id: "1", 
  },
  {
    appName: "Horiseon",
    github: "https://mattgaither.github.io/challenge/",
    link: "https://mattgaither.github.io/challenge/",
    img: Horiseon,
    alt: 'A picture of the Run Buddy homepage',
    id: "2",
  },
  {
    appName: "Stockwise",
    github: "https://mattgaither.github.io/stock-project/",
    link: "https://github.com/mattgaither/stock-project",
    img: Stockwise,
    alt: 'A picture of the Run Buddy homepage',
    id: "3",
  },
  {
    appName: "The Kings Mile",
    github: "https://github.com/alanam79/The_Kings_Mile",
    link: "https://the-kings-mile.herokuapp.com/",
    img: KingsMile, 
    alt: 'A picture of the Run Buddy homepage',
    id: "4",
  },
  ];

  const renderCard = ( card, index ) => {
    return (
      <Card className="bg-dark text-white" key={ index }>
        <Card.Img src={card.img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{card.appName}</Card.Title>
          <a href={card.github} >GitHub Page</a> <br/>
          <a href={card.link} className="Card text">Deployed Page</a>
          {/* <Card.Text><a href={projectInfo.github} >GitHub Page</a> </Card.Text>
          <Card.Text><a href={projectInfo.link} >Deployed Page</a> </Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    );
  };
  return <div className="Projects"> {projectInfo.map(renderCard)} </div>
};

export default Projects;