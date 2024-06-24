import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} borderBottom="1px" borderColor="gray.200">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <Link to="/">Financial Times</Link>
        </Heading>
        <Spacer />
        <Button colorScheme="blue" bg="#0D7680" color="white" _hover={{ bg: "#0A5C63" }}>
          Subscribe
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;