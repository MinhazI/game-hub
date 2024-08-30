import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();

  return (
    <>
      {error && <Text color={"tomato"}>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          Array(10)
            .fill(1)
            .map((number, key) => <GameCardSkeleton key={key} />)}
        {data.map((game) => (
          <Box key={game.id}>
            <GameCard key={game.id} game={game} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
