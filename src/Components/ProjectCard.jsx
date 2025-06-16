import { Button, Card, CardActions, CardContent, IconButton, Link, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import cardDecor from '../Images/card_decor.svg';
import Media from "./Media";

const cardWidth = 320;

const ProjectCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() { setIsExpanded(!isExpanded); }

  return (
    <Card sx={{ maxWidth: cardWidth }}>
      <Media image={data.image} />
      <CardContent sx={{ position: "relative" }}>
        <img src={cardDecor} style={{
          position: 'absolute',
          top: 5,
          right: 5,
          opacity: 0.2
        }} alt="card decorative element" />
        <Typography gutterBottom variant="h6" textAlign="center">
          {data.title}
        </Typography>
        <Typography variant="body2" noWrap={!isExpanded}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: (data.description.length >= 20) ? 'space-between' : 'flex-end'
      }}>
        {
          (data.description.length >= 20) ?
            (
              <IconButton onClick={toggleExpanded}>
                {
                  (isExpanded) ? (
                    <ExpandLessIcon fontSize="small" color="primary" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" color="primary" />
                  )
                }
              </IconButton>
            ) : (
              <Fragment></Fragment>
            )
        }
        <Link href={data.link} target="_blank">
        <Button variant="outlined">
          View Project
        </Button>
        </Link>
      </CardActions>
    </Card >
  );
}

export default ProjectCard;