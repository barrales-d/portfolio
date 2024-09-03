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
      <Grid container justifyContent='center' spacing={5}>
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