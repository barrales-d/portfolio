import { Box, Typography, LinearProgress, linearProgressClasses, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { theme } from "../Theme";

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
    <Grid item md={6} xs={12}>
  <Box width="100%" position="relative">
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: '1.5rem',
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5
        },
      }}
    />
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
    >
      <Typography variant="body2" fontWeight="bold"   sx={{
      color: progress < 15 ? theme.palette.text.primary : theme.palette.secondary.dark,
      transition: 'color 0.3s ease',
  }}>
        {data.name}
      </Typography>
      
      <Typography variant="body2" fontWeight="bold"   sx={{
      color: progress < 95 ? theme.palette.text.primary : theme.palette.secondary.dark,
      transition: 'color 0.3s ease',
  }}>
        {data.percentage}&#37;
      </Typography>
    </Box>
  </Box>
</Grid>
  );
}

export default Skillbar;