import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color={"tomato"}>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((number) => <GameCardSkeleton key={number} />)}
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
