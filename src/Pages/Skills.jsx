import { Grid } from "@mui/material";

import Skillbar from "../Components/Skillbar";
import Wrapper from "../Components/Wrapper";

import skills from "../Data/skills.json";

const Skills = ({ animation }) => {
  return (
    <Wrapper title='Skills' animation={animation}>
      <Grid container mb={4} spacing={6}>
        {
          skills.map(skill => (
            <Grid item key={skill.name} xs={12} md={6}>
              <Skillbar data={skill}> </Skillbar>
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Skills;