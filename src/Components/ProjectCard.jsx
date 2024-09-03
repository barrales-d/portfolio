import { Card, CardActionArea, CardActions, CardContent, IconButton, Link, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import cardDecor from '../Images/card_decor.svg';
import Media from "./Media";

const cardWidth = 240;

const ProjectCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() { setIsExpanded(!isExpanded); }

  return (
    <Card sx={{ maxWidth: cardWidth }}>
      <CardActionArea>
        <Media image={data.Image} cardWidth={cardWidth} />
        <CardContent sx={{ position: "relative" }}>
          <img src={cardDecor} style={{
            position: 'absolute',
            top: 5,
            right: 5,
            opacity: 0.2
          }} />
          <Typography gutterBottom variant="h4">
            {data.Title}
          </Typography>
          <Typography variant="body2" noWrap={!isExpanded}>
            {data.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        display: 'flex',
        justifyContent: (data.Description.length >= 20) ? 'space-between' : 'flex-end'
      }}>
        {
          (data.Description.length >= 20) ?
            (
              <IconButton onClick={toggleExpanded}>
                {
                  (isExpanded) ? (
                    <ExpandLessIcon fontSize="medium" color="primary" />
                  ) : (
                    <ExpandMoreIcon fontSize="medium" color="primary" />
                  )
                }
              </IconButton>
            ) : (
              <Fragment></Fragment>
            )
        }
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