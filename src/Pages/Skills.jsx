import { Box, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import bgDecoration from '../Images/bg_decor.svg';

import Skillbar from "../Components/Skillbar";

import PocketBase from 'pocketbase';

const Skills = () => {
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
    <Fragment>
      {/* <img
            src={bgDecoration} 
            alt=""
            style={{
            }}/> */}
      <Box
        sx={{
          background: `url(${bgDecoration})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'round'
        }}
      >
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
    </Fragment>
  );
}

export default Skills;