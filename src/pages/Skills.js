import { Box, Container, Grid, LinearProgress, Typography, linearProgressClasses } from "@mui/material";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <main>
        <Typography variant="h2" my={3}>My Skills</Typography>
        <Grid container spacing={6}>
          {
            skills.map(skill => (
              <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="space-between" alignItems="baseline">
                  <Typography variant="h6">{skill.name}</Typography>
                  <Typography variant="body2">{skill.progress}&#37;</Typography>
                </Box>
                <Box width="100%">
                  <LinearProgress
                    variant="determinate"
                    value={skill.progress}
                    sx={{
                      height: 12,
                      borderRadius: 5,
                      [`& .${linearProgressClasses.bar}`]: {
                        borderRadius: 5,
                      }
                    }} />
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </main>
    </Container>
  );
}

export default Skills;