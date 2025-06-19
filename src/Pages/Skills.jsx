import { Box, Divider, Grid, Typography } from "@mui/material";

import Skillbar from "../Components/Skillbar";
import Wrapper from "../Components/Wrapper";

import skills from "../Data/skills.json";
import { Fragment } from "react";

const Skills = ({ animation }) => {
  console.log(skills);
  return (
    <Wrapper title='Skills' animation={animation}>
      {
        skills.map(skillBlock => (
          <Box component="div">
            <Typography gutterBottom variant="h5" textTransform='capitalize' textAlign='center'>
              { skillBlock.section }
            </Typography>
            <Divider variant="fullWidth" />
            <Grid mb={4} container spacing={2}>
            {
              skillBlock.items.map(skill => (
                <Skillbar data={skill} />
              ))
            }
            </Grid>
          </Box>
        ))
      }
    </Wrapper>
  );
}

export default Skills;