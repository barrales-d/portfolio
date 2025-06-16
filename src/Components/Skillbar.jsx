import { Box, Typography, LinearProgress, linearProgressClasses } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

const Skillbar = ({ data }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(progress < data.percentage) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + 1;
          return next >= data.percentage ? data.percentage : next;
        })
      }, 10);
      return () => clearInterval(interval);
    }

  }, [data.percentage, progress]);

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="body2">{data.percentage}&#37;</Typography>
      </Box>
      <Box width="100%">
        <LinearProgress
          variant="determinate"
          value={progress}
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