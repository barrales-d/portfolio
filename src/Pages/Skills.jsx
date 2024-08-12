import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Skillbar from "../Components/Skillbar";

import PocketBase from 'pocketbase';
import { theme } from "../Theme";

const Skills = ({animation}) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      const pb = new PocketBase('https://diego-dev-3240.fly.dev');

      await pb.admins.authWithPassword(process.env.REACT_APP_PB_EMAIL, process.env.REACT_APP_PB_PASSWORD);

      const records = await pb.collection('skills').getFullList({
        sort: '-created',
      });
      setSkills(records);
    })();
  }, []);

  return (
    <Box component='section' id="Skills" data-aos={animation}>
      <Typography variant="h4" textTransform='capitalize' textAlign='center' my={3}>Skills</Typography>
      <Box p={5} border={`${theme.palette.primary.main} 0.25rem solid`}>
        <Grid container mb={4} spacing={6}>
          {
            skills.map(skill => (
              <Grid item key={skill.Title + '-' + skill.id} xs={12} md={6}>
                <Skillbar data={skill}> </Skillbar>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
}

export default Skills;