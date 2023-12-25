/* eslint-disable react/prop-types */
import { Input, Button, Heading, Flex, Box, Divider } from "@chakra-ui/react";
import { useState } from "react";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Box p={4} width="100%">
      <Heading mb={12} size="2xl" color="red.500">
        Search Books
      </Heading>

      {/* Search input and button */}
      <Flex alignItems="center" justifyContent="center" mb={8}>
        <Input
          id="search-input"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="100"
        />
        <Button colorScheme="red" ml={2} onClick={handleSearch}>
          Search
        </Button>
      </Flex>
      <Divider borderWidth="2px" mb="2px" />
      <Divider borderWidth="2px" />
    </Box>
  );
}
