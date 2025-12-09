import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import targetAudienceData from '@/data/TargetAudience.json';

export function TargetAudience() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="white" id="target-audience">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" fontWeight="bold" mb={3}>
            Целевая аудитория
          </Heading>
          <Box w="60px" h="3px" bg="brand.darkBlue" mx="auto" borderRadius="full" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 3, md: 6 }}>
          {targetAudienceData.map((item, index) => (
            <Box key={index} p={{ base: 4, md: 6 }} bg="brand.lightBg" border="1px" borderColor="brand.borderGray">
              <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'md' }}>
                {item}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box mt={{ base: 6, md: 8 }} textAlign="center">
          <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'lg' }}>
            Единое аналитическое хранилище позволит целевым компаниям консолидировать данные из различных источников, получить расширенные аналитические возможности и повысить эффективность
            бизнес-процессов.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
