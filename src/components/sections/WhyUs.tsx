import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import whyUsData from '@/data/WhyUs.json';

export function WhyUs() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="brand.lightBg" id="why-us">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" fontWeight="bold" mb={3}>
            Почему именно мы?
          </Heading>
          <Box w="60px" h="3px" bg="brand.darkBlue" mx="auto" borderRadius="full" />
        </Box>
        <Box maxW="2xl" mx="auto" mb={{ base: 6, md: 8 }}>
          <Box
            bg="brand.lightBg"
            h={{ base: '180px', md: '240px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            border="1px"
            borderColor="brand.borderGray"
            borderStyle="dashed"
          >
            <Text color="brand.darkGray" fontSize={{ base: 'sm', md: 'md' }} opacity={0.5} textAlign="center" px={4}>
              [Фото: Команда Project K01 или примеры реализованных проектов]
            </Text>
          </Box>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          <Box>
            <Heading as="h3" size={{ base: 'md', md: 'lg' }} color="brand.darkGray" mb={{ base: 3, md: 5 }}>
              Компетенции
            </Heading>
            <Box gap={{ base: 3, md: 4 }}>
              {whyUsData.competencies.map((item, index) => (
                <Box key={index} mb={{ base: 2, md: 3 }} pl={{ base: 4, md: 5 }} position="relative">
                  <Box position="absolute" left={0} top="0.5em" w="6px" h="6px" bg="brand.darkBlue" borderRadius="full" />
                  <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'md' }}>
                    {item}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Heading as="h3" size={{ base: 'md', md: 'lg' }} color="brand.darkGray" mb={{ base: 3, md: 5 }}>
              Преимущества
            </Heading>
            <Box gap={{ base: 3, md: 4 }}>
              {whyUsData.advantages.map((item, index) => (
                <Box key={index} mb={{ base: 2, md: 3 }} pl={{ base: 4, md: 5 }} position="relative">
                  <Box position="absolute" left={0} top="0.5em" w="6px" h="6px" bg="brand.darkBlue" borderRadius="full" />
                  <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'md' }}>
                    {item}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
