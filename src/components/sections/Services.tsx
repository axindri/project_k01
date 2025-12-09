import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import servicesData from '@/data/Services.json';
import { SlideIn } from '@/components/ui/slide-in';

export function Services() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="brand.lightBg" id="services">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 10 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" fontWeight="bold" mb={3}>
            Услуги
          </Heading>
          <Box w="60px" h="3px" bg="brand.darkBlue" mx="auto" borderRadius="full" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 3, md: 6 }}>
          {servicesData.map((item, index) => (
            <SlideIn key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
              <Box p={{ base: 4, md: 6 }} bg="white" border="1px" borderColor="brand.borderGray">
                <Heading as="h3" size={{ base: 'md', md: 'lg' }} color="brand.darkGray" mb={{ base: 2, md: 3 }}>
                  {item.title}
                </Heading>
                <Box
                  bg="brand.lightBg"
                  h={{ base: '140px', md: '180px' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="md"
                  mb={{ base: 2, md: 3 }}
                  border="1px"
                  borderColor="brand.borderGray"
                  borderStyle="dashed"
                >
                  <Text color="brand.darkGray" fontSize={{ base: 'sm', md: 'md' }} opacity={0.5} textAlign="center" px={4}>
                    [Скриншот: {item.title}]
                  </Text>
                </Box>
                <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'md' }}>
                  {item.description}
                </Text>
              </Box>
            </SlideIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
