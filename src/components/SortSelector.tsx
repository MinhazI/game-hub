import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
  gameQuery: GameQuery;
}

const SortSelector = ({
  onSelectSortOrder,
  sortOrder,
  gameQuery,
}: SortSelectorProps) => {
  const { isLoading } = useGames(gameQuery);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "", label: "" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder);

  if (isLoading) return <PlatformSelectorSkeleton />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order By ${currentSortOrder?.label || ""}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
