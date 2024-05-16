import { Box, Button, Paper, Typography, alpha, styled } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const ProjectView = ({ project }) => {
  const ProjectArea = styled(Paper)(({ theme }) => ({
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],

    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.black, 0.3)
        : alpha(theme.palette.common.white, 0.3),
    height: "90%",
    width: "max-content",
    [theme.breakpoints.down('sm')]: {width: "auto"},
    margin: 24,
    padding: 24,
    overflowY: "auto",
    overscrollBehavior: "contain",
    borderRadius: 0,
    backdropFilter: "blur(1rem)",
  }));
  return (
    <Fragment>
      <Box position="relative" height="max-content">
        <img id="project-image" alt={`${project.title}`} src={require(`../assets/${project.image}`)} />
        <ProjectArea elevation={5}>
          <Typography component="h1" variant="h4" fontWeight={700} mb={1}>{project.title}</Typography>
          <Box textAlign="justify" sx={{
            maxWidth: { xs: "40ch", md: "75ch" }
          }}>
            <Typography variant="body2" className="paragraph" mb={2}>
              {project.short_desc}
            </Typography>
            {
              project.long_desc.split('\n\n').map((text, idx) => (
                <Typography mb={1} className="paragraph" key={'para-' + idx.toString()}>{text}</Typography>
              ))
            }
          </Box>
          <Box textAlign="end">
            <Link to="/projects/"><Button variant="contained">Close</Button></Link>
          </Box>
        </ProjectArea>
      </Box>
    </Fragment>
  );
}

export default ProjectView;