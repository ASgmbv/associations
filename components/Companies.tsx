import React from "react";
import { Box,Container,Image } from "@chakra-ui/react";
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
      flexWrap="wrap"
      alignItems="center">
         <Image
          boxSize="100px"
          objectFit="contain"
          src="https://uploads-ssl.webflow.com/6203de63971a639d68f26fda/620d908970058309cc7146fe_Frame%20119.png"
          alt="Dan Abramov"
        />
         <Image
          boxSize="100px"
          objectFit="contain"
          src="https://uploads-ssl.webflow.com/6203de63971a639d68f26fda/620d908970058309cc7146fe_Frame%20119.png"
          alt="Dan Abramov"
        />
         <Image
          boxSize="100px"
          objectFit="contain"
          src="https://uploads-ssl.webflow.com/6203de63971a639d68f26fda/620d908970058309cc7146fe_Frame%20119.png"
          alt="Dan Abramov"
        />
    </Container>
    </Box>
  );
};

export default Companies;
