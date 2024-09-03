import { CardMedia, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useMemo, useState } from "react";
import { theme } from "../Theme";


const imageHeight = 128;

const Media = ({ image, cardWidth }) => {
  const [projectImage, setProjectImage] = useState(null);

  function getImageTitle(image) {
    return image.split(".")[0];
  }

  useMemo(() => {
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
export default Media;