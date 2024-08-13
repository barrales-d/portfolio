import { Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";

const Art = ({ animation }) => {
  return (
    <Wrapper title='Art' animation={animation}>
      <Typography variant="h2">
        hii
      </Typography>
    </Wrapper>
  );
}

export default Art;