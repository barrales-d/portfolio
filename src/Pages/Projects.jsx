import { Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";
// import { useMemo } from "react";

import '../App.css';

const Projects = ({ animation }) => {
  // const projects = useMemo(() => {
  //   return [
  //     {

  //     }
  //   ];
  // }, []);
  return (
    <Wrapper title='Projects' animation={animation}>
      <Typography variant="h4">
        Coming Soon<span className="loader"></span>
      </Typography>
    </Wrapper>
  );
}

export default Projects;