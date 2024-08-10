import { Box, Typography, LinearProgress, linearProgressClasses } from "@mui/material";
import { Fragment } from "react";

const Skillbar = ({ data }) => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography variant="h6">{data.Title}</Typography>
        <Typography variant="body2">{data.Percentage}&#37;</Typography>
      </Box>
      <Box width="100%">
        <LinearProgress
          variant="determinate"
          value={data.Percentage}
          sx={{
            height: '1rem',
            borderRadius: 5,
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
            }
          }} />
      </Box>
    </Fragment>
  );
}

export default Skillbar;