import { Grid } from "@mui/material";
import Wrapper from "../Components/Wrapper";

import '../App.css';
import ProjectCard from "../Components/ProjectCard";
import projects from "../Data/projects.json";

const Projects = ({ animation }) => {
  return (
    <Wrapper title='Projects' animation={animation}>
      <Grid container spacing={3}>
        {
          projects.map((project, idx) => (
            <Grid item key={idx} xs={10} sm={6} md={4}>
              <ProjectCard data={project} />
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Projects;

// TODO: Smoothly Animate expanding and retracting cards