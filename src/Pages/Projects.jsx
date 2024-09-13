import { Grid } from "@mui/material";
import Wrapper from "../Components/Wrapper";
import { useMemo } from "react";

import '../App.css';
import ProjectCard from "../Components/ProjectCard";

const Projects = ({ animation }) => {
  const projects = useMemo(() => {
    let iota = 0;
    function updateIota() {
      const current = iota;
      iota += 1;
      return current;
    }
    return [
      {
        ID: updateIota(),
        Title: 'Astro',
        Description: 'Asteroid Clone',
        Image: 'astro.png',
        Link: {
          to: 'github',
          url: 'https://github.com/barrales-d/Astro',
        }
      },
      {
        ID: updateIota(),
        Title: 'Console Graphics',
        Description: 'Mini 2D graphics library in C++ for the console / terminal. Create Rectangles and Squares, Circles and Ellipses, Lines, Triangles with 1 color or interpolate with 3 colors using barycentric coordinates! and most recently Text rendering using a Pico-8 style font',
        Image: 'console.svg',
        Link: {
          to: 'website',
          url: 'https://barrales-d.github.io/ConsoleGraphics/',
        }
      },
      {
        ID: updateIota(),
        Title: 'Qubic',
        Description: '3D tic-tac-toe game in Pygame with AI bot to play against',
        Image: '',
        Link: {
          to: 'github',
          url: 'https://github.com/barrales-d/Qubic',
        }
      },
      {
        ID: updateIota(),
        Title: 'iTravel App',
        Description: 'This project attempted to create an application helps travelers be stress-free, allowing travelers to focus more on enjoying their experience, rather than being stressed out over fight information, and allowed travelers to have all of their information in one application. I learned about databases and APIs while learning Swift.',
        Image: 'airplane.png',
        Link: {
          to: 'github',
          url: 'https://github.com/barrales-d/iTravel-Application',
        }
      },
      {
        ID: updateIota(),
        Title: 'Lexical Analyzer',
        Description: 'I created a parser to collect all tokens of C code by using the file system’s input and output. In addition, I developed an Arena utility system to manage memory allocation and deallocation',
        Image: '',
        Link: {
          to: 'github',
          url: 'https://github.com/barrales-d/LexicalAnalyzer',
        }
      },
      // {
      //   ID: updateIota(),
      //   Title: '',
      //   Description: '',
      //   Image: '',
      //   Link: {
      //     to: '',
      //     url: '',
      //   }
      // }
    ];
  }, []);
  return (
    <Wrapper title='Projects' animation={animation}>
      <Grid container spacing={5}>
        {
          projects.map(project => (
            <Grid item key={'project-' + project.ID} xs={12} sm={6} md={3}>
              <ProjectCard data={project} />
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Projects;