import { Grid } from "@mui/material";
import { useMemo } from "react";

import Skillbar from "../Components/Skillbar";
import Wrapper from "../Components/Wrapper";

const Skills = ({ animation }) => {
  const skills = useMemo(() => {
    let iota = 0;
    function updateIota() {
      const current = iota;
      iota += 1;
      return current;
    }
    return [
      {
        ID: updateIota(),
        Title: 'C++',
        Percentage: 85
      },
      {
        ID: updateIota(),
        Title: 'Javascript',
        Percentage: 83
      },
      {
        ID: updateIota(),
        Title: 'HTML / CSS',
        Percentage: 94
      },
      {
        ID: updateIota(),
        Title: 'Python',
        Percentage: 68
      },
      {
        ID: updateIota(),
        Title: 'Problem Solving',
        Percentage: 92
      }
    ]
  }, []);
  return (
    <Wrapper title='Skills' animation={animation}>
      <Grid container mb={4} spacing={6}>
        {
          skills.map(skill => (
            <Grid item key={skill.Title + '-' + skill.ID} xs={12} md={6}>
              <Skillbar data={skill}> </Skillbar>
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default Skills;