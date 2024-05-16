import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import './card.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// project: { title, image, github, short_desc, long_desc }
const ProjectCard = ({ project, id }) => {

  const imageHeight = 150;

  const [projectImage, setProjectImage] = useState(null);

  useEffect(() => {
    const image = require(`../../assets/${project.image}`);

    setTimeout(() => { setProjectImage(image); }, 500);
  }, [project.image]);

  return (
    <Card sx={{ maxWidth: 320, textAlign: "start" }}>
      {
        projectImage ? (
          <CardMedia
            sx={{ maxHeight: imageHeight }}
            image={projectImage}
            title={project.title}
            component="img" />
        ) : (
          <Skeleton variant="rectangular" height={imageHeight} width={320} />
        )
      }
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