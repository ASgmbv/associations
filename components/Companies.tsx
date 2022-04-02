import React from "react";
import { Box,Container } from "@chakra-ui/react";
import {
  AiFillGoogleCircle,
  AiFillApple,
  AiOutlineTwitter,
  AiFillBehanceCircle,
  AiFillChrome,
  AiFillDribbbleSquare,
} from "react-icons/ai";
import { SiGooglecolab, SiChocolatey, SiEyeem } from "react-icons/si";

const Companies = () => {
  return (
    <Box
      width="100%"
      bg="gray.50"
      color="gray.600"
      
      fontSize="4xl"
    >
    <Container display="flex"
      justifyContent="space-between"
      alignItems="center">
      <AiFillGoogleCircle />
      <AiFillApple />
      <AiOutlineTwitter />
      <SiGooglecolab />
      <SiEyeem />
      <AiFillBehanceCircle />
      <AiFillChrome />
      <AiFillDribbbleSquare />
      <SiChocolatey />
    </Container>
    </Box>
  );
};

export default Companies;
