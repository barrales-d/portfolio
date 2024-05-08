import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import './card.css';
import { Link } from "react-router-dom";

// project: { title, image, github, short_desc, long_desc }
const ProjectCard = ({ project, id }) => {
  return (
    <Card sx={{ maxWidth: 320, textAlign: "start" }}>
      <CardMedia
        sx={{ maxHeight: 150 }}
        image={require(`../../assets/${project.image}`)}
        title={project.title}
        component="img" />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" maxHeight={45} className="limit-text">
          {project.short_desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/projects/' + id}>
          <Button variant="text" color="secondary">Learn More</Button>
        </Link>
        <a href={project.github} target="_blank" rel="noreferrer">
          <Button variant="text" color="secondary">
            Github
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;