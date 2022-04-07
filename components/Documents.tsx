import React from "react";
import { Stack, Image, Container, Heading } from "@chakra-ui/react";





const Documents = () => {
  return (
<>
      <Heading
        size="xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="20px"
      >
        Наши документы
      </Heading>
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >

          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrW097iurRQ6sFIIu9LI3Al4JIqJGd-dGVA&usqp=CAU"
            alt="Dan Abramov"
          />

          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrW097iurRQ6sFIIu9LI3Al4JIqJGd-dGVA&usqp=CAU"
            alt="Dan Abramov"
          />
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrW097iurRQ6sFIIu9LI3Al4JIqJGd-dGVA&usqp=CAU"
            alt="Dan Abramov"
          />

      </Stack>
      </>
  );
};

export default Documents;
