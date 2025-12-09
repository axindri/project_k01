import { Flex } from '@chakra-ui/react';
import { Content } from '@/components/layout/Content';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Content />
      <Footer />
    </Flex>
  );
}

export default App;
