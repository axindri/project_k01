import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import advantagesData from '@/data/Advantages.json';

export function Advantages() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="brand.darkGray" id="advantages">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="white" fontWeight="bold" mb={3}>
            Преимущества
          </Heading>
          <Box w="60px" h="3px" bg="brand.orange" mx="auto" borderRadius="full" />
        </Box>
        <Flex wrap="wrap" gap={{ base: 4, md: 6 }} justify="center" mb={{ base: 4, md: 6 }}>
          {advantagesData.map((item, index) => (
            <Box key={index} textAlign="center" flex={{ base: '1 1 100%', sm: '1 1 45%', md: '1 1 20%' }} px={{ base: 2, md: 0 }}>
              <Box fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={2} color="white">
                {item.number}
              </Box>
              <Box fontSize={{ base: 'sm', md: 'md' }} color="white">
                {item.label}
              </Box>
            </Box>
          ))}
        </Flex>
        <Box textAlign="center" mt={{ base: 4, md: 6 }}>
          <Text color="white" fontSize={{ base: 'xs', md: 'sm' }} opacity={0.8}>
            * Показатели могут варьироваться в зависимости от специфики бизнеса и масштаба проекта
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
