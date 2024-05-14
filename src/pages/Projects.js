import { Box, Container, Grid, Typography } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", marginBottom: 4 }}>
      <main>
        <Box my={3}>
          <Typography variant="h2">My Projects</Typography>
          <Typography>Things I've built for school and personal projects</Typography>
        </Box>
        <Grid container spacing={4}>
          {
            projects.map((p, idx) => (
              <Grid item xs={12} sm={6} md={4} key={p.title + '-' + idx.toString()}>
                <ProjectCard project={p} id={idx.toString()} />
              </Grid>
            ))
          }
        </Grid>
      </main>
    </Container>
  );
}

export default Projects;