import { Box, Container, Heading, Text } from '@chakra-ui/react';
import processData from '@/data/Process.json';

export function Process() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="white" id="process">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" fontWeight="bold" mb={3}>
            Процесс
          </Heading>
          <Box w="60px" h="3px" bg="brand.darkBlue" mx="auto" borderRadius="full" />
        </Box>
        <Box maxW="4xl" mx="auto" mb={{ base: 6, md: 8 }}>
          <Box
            bg="brand.lightBg"
            h={{ base: '200px', md: '280px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            border="1px"
            borderColor="brand.borderGray"
            borderStyle="dashed"
          >
            <Text color="brand.darkGray" fontSize={{ base: 'sm', md: 'md' }} opacity={0.5} textAlign="center" px={4}>
              [Блок-схема: Процесс реализации проекта]
            </Text>
          </Box>
        </Box>
        <Box maxW="2xl" mx="auto">
          {processData.map((step, index) => (
            <Box key={index} p={{ base: 3, md: 5 }} bg="brand.lightBg" borderLeft="4px" borderColor="brand.darkBlue" mb={{ base: 3, md: 4 }}>
              <Box fontWeight="bold" color="brand.darkGray" mb={2} fontSize={{ base: 'md', md: 'lg' }}>
                {step.title}
              </Box>
              <Box color="brand.darkGray" fontSize={{ base: 'sm', md: 'md' }}>
                {step.description}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
