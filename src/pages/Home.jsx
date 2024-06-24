import { Box, Container, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Global Markets Surge Amid Economic Recovery", excerpt: "Stock markets around the world show significant gains as economies rebound from pandemic lows.", image: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Tech Giants Face New Regulations", excerpt: "Governments worldwide propose stricter rules for big tech companies to ensure fair competition.", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Climate Change: A New Era for Green Energy", excerpt: "Renewable energy investments reach record highs as countries commit to carbon neutrality.", image: "https://via.placeholder.com/300x200" },
  { id: 4, title: "The Future of Work: Remote vs. Office", excerpt: "Companies grapple with long-term strategies as employees demand flexible working arrangements.", image: "https://via.placeholder.com/300x200" },
];

const Home = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={8}>
        Top Stories
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {articles.map((article) => (
          <Box key={article.id} borderWidth="1px" borderColor="gray.300" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} />
            <Box borderBottom="1px" borderColor="gray.200" mb={3} />
            <VStack p={4} align="start" spacing={3}>
              <Heading as="h3" size="md" color="#0D7680">
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </Heading>
              <Text>{article.excerpt}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;