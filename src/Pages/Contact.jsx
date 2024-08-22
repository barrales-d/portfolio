import { Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";

const Contact = ({ animation }) => {
  return (
    <Wrapper title='Contact' animation={animation}>
      <Typography variant="h4">
        Coming Soon<span className="loader"></span>
      </Typography>
    </Wrapper>
  );
}

export default Contact;