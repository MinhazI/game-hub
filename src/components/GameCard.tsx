import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading padding={5} fontSize={"2xl"}>
        {game.name}
      </Heading>
    </Card>
  );
};

export default GameCard;
