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
        Title: 'Basic Title',
        Description: 'Basic Description',
        Image: 'pfp.png',
        Link: {
          to: 'github',
          url: 'https://github.com/barrales-d',
        }
      },
      {
        ID: updateIota(),
        Title: '',
        Description: 'Basic Longer Description it be like that I swear I am almost done with making this project card this should be the last thing I need to do before I can say this is completed',
        Image: '',
        Link: {
          to: '',
          url: '',
        }
      },
      {
        ID: updateIota(),
        Title: '',
        Description: '',
        Image: '',
        Link: {
          to: '',
          url: '',
        }
      },
      {
        ID: updateIota(),
        Title: '',
        Description: '',
        Image: '',
        Link: {
          to: '',
          url: '',
        }
      }
    ];
  }, []);
  return (
    <Wrapper title='Projects' animation={animation}>
      <Grid container mb={4} spacing={6}>
        {
          projects.map(project => (
            <Grid item key={project.Title + '-' + project.ID} xs={12} sm={6} md={3}>
              <ProjectCard data={project} />
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Projects;