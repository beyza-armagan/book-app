/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Text, Flex, Image, Button, Center } from "@chakra-ui/react";
import DetailsModal from "./DetailsModal";

export default function ListBooks({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal with details of the selected book
  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return books && books.length > 0 ? (
    <Flex flexWrap="wrap" mt={5}>
      {books.map((item) =>
        // check for imageLinks and description
        item.volumeInfo.imageLinks && item.volumeInfo.description ? (
          <Box
            key={item.id}
            width={{ base: "100%", md: "48%", lg: "32%" }}
            mb={4}
            p={4}
            ml={3}
            borderWidth="1px"
            borderRadius="md"
            _hover={{
              boxShadow: "md", // add shadow on hover
            }}
          >
            <Text fontSize="xl" height="100px" fontWeight="bold" mb={2}>
              {item.volumeInfo.title}
            </Text>
            <Center>
              <Image
                src={item.volumeInfo.imageLinks.thumbnail}
                alt="Book Cover"
                mb={2}
                justifyContent="center"
                boxSize="230px"
                objectFit="contain"
              />
            </Center>
            {item.volumeInfo.authors && (
              <Text fontSize="md" color="gray.500" mb={2}>
                {item.volumeInfo.authors.join(", ")}
              </Text>
            )}
            <Box mt="auto">
              <Button color="red" onClick={() => openModal(item)} mr={2}>
                View Details
              </Button>
            </Box>
          </Box>
        ) : null
      )}
      {selectedBook && (
        <DetailsModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedBook={selectedBook}
        />
      )}
    </Flex>
  ) : (
    <Text fontSize="xl" fontWeight="bold" textAlign="center">
      Please search for a book...
    </Text>
  );
}
