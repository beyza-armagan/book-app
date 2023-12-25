/* eslint-disable react/prop-types */
import {
  Text,
  Image,
  Button,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Center,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function DetailsModal({
  isModalOpen,
  closeModal,
  selectedBook,
}) {
  return (
    <ChakraProvider>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {selectedBook.volumeInfo.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center flexDirection="column">
              <Image
                src={selectedBook.volumeInfo.imageLinks.thumbnail}
                alt="Book Cover"
                mb={4}
                justifyContent="center"
              />
              <Text fontSize="md" color="gray.500" mb={2}>
                {selectedBook.volumeInfo.authors.join(", ")}
              </Text>
              <Text textAlign="center" fontSize="sm" mb={3}>
                {selectedBook.volumeInfo.description}
              </Text>
              <Text fontSize="sm">
                Page Count: {selectedBook.volumeInfo.pageCount}
              </Text>
              <Text fontSize="sm">
                Date of Publication: {selectedBook.volumeInfo.publishedDate}
              </Text>
              <Text fontSize="sm">
                Publisher: {selectedBook.volumeInfo.publisher}
              </Text>
            </Center>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
