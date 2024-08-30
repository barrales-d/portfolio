import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Skeleton, Typography } from "@mui/material";
import { theme } from "../Theme";
import { Fragment, useEffect, useState } from "react";

const cardWidth = 240;
const imageHeight = 128;

const ProjectCard = ({ data }) => {
  function getImageTitle(image) {
    return image.split(".")[0];
  }
  const Media = ({ image }) => {
    const [projectImage, setProjectImage] = useState(null);

    useEffect(() => {
      if (image) {
        const actualImage = require(`../Images/${image}`);
        setProjectImage(actualImage);
      }
    }, [image]);

    if (image) {
      return (
        <Fragment>
          {
            projectImage ? (
              <CardMedia sx={{ height: imageHeight }} image={projectImage} title={getImageTitle(image)} />
            ) : (
              <Skeleton variant="rectangular" height={imageHeight} width={cardWidth} />
            )
          }
        </Fragment>
      )
    }

    return (
      <Box sx={{ height: imageHeight, backgroundColor: theme.palette.primary.main }}></Box>
    )
  }
  return (
    <Card sx={{ maxWidth: cardWidth }}>
      <CardActionArea>
        <Media image={data.Image} />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {data.Title}
          </Typography>
          <Typography variant="body2">
            {data.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href={data.Link.url} underline="hover">
          {
            (data.Link.to === 'github') ?
              'Github' : 'View Project'
          }
        </Link>
      </CardActions>
    </Card >
  );
}

export default ProjectCard;