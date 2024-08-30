import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      paddingBottom={5}
      width={"300px"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
