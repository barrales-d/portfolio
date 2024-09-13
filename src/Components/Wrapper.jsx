import { Box, Typography } from "@mui/material";
import { theme } from "../Theme";

const Wrapper = ({ title, animation, sx, children }) => {
  return (
    <Box component='section' id={title} data-aos={animation} sx={sx}>
      <Typography variant="h4" textTransform='capitalize' textAlign='center' my={3}>{title}</Typography>
      <Box p={5} border={`${theme.palette.primary.main} 0.25rem solid`}>
        {
          children
        }
      </Box>
    </Box>
  );
}

export default Wrapper;