import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Skillbar from "../Components/Skillbar";
import Wrapper from "../Components/Wrapper";

import PocketBase from 'pocketbase';
import { theme } from "../Theme";

const Skills = ({ animation }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      if (skills.length == 0) {
        // const pb = new PocketBase('https://diego-dev-3240.fly.dev');

        // await pb.admins.authWithPassword(process.env.REACT_APP_PB_EMAIL, process.env.REACT_APP_PB_PASSWORD);

        // const records = await pb.collection('skills').getFullList({
        //   sort: '-created',
        // });
        // setSkills(records);
        setSkills([
          {
            Title: 'this',
            Percentage: 20
          },
          {
            Title: 'is',
            Percentage: 20
          },
          {
            Title: 'test',
            Percentage: 20
          },
          {
            Title: 'data',
            Percentage: 20
          },

        ]);
      }
    })();
  }, []);

  return (
    <Wrapper title='Skills' animation={animation}>
      <Grid container mb={4} spacing={6}>
        {
          skills.map(skill => (
            <Grid item key={skill.Title + '-' + skill.id} xs={12} md={6}>
              <Skillbar data={skill}> </Skillbar>
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Skills;