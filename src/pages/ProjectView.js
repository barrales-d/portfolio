import { Box, Button } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProjectView = ({ project }) => {
  return (
    <Fragment>
      <Box p={12}>
        <h2>Project View</h2>
        <h3>{project.title}</h3>
        <Link to="/projects/"><Button>Close</Button></Link>
      </Box>
    </Fragment>
  );
}

export default ProjectView;