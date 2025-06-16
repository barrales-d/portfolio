import { Box, CardMedia } from "@mui/material";
import { Fragment } from "react";
import { theme } from "../Theme";


const imageHeight = 240;

const Media = ({ image }) => {

  function getImageTitle(image) {
    return image.split(".")[0].split("/")[2];
  }

  if (image) {
    return (
      <Fragment>
        <Box sx={{ height: imageHeight, backgroundColor: theme.palette.primary.main }}>
        {image && (
          <CardMedia sx={{ 
            height: imageHeight,
           }} image={image} title={getImageTitle(image)} />
        )}
        </Box>
      </Fragment>
    )
  }

  return (
    <Box sx={{ height: imageHeight, backgroundColor: theme.palette.primary.main }}></Box>
  )
}
export default Media;