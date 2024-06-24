import { useParams } from "react-router-dom";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";

const articles = {
  1: {
    title: "Global Markets Surge Amid Economic Recovery",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://via.placeholder.com/800x400",
  },
  2: {
    title: "Tech Giants Face New Regulations",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "https://via.placeholder.com/800x400",
  },
};

const Article = () => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <Box>Article not found</Box>;
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={4}>
        {article.title}
      </Heading>
      <Image src={article.image} alt={article.title} mb={6} />
      <Text fontSize="lg" lineHeight="tall">
        {article.content}
      </Text>
    </Container>
  );
};

export default Article;