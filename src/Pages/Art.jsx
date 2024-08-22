import { Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";

const Art = ({ animation }) => {
  return (
    <Wrapper title='Art' animation={animation}>
      <Typography variant="h4">
        Coming Soon<span className="loader"></span>
      </Typography>
    </Wrapper>
  );
}

export default Art;