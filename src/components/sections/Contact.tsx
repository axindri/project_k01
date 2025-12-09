import { Box, Container, Heading, Text, Flex, Link } from '@chakra-ui/react';

export function Contact() {
  return (
    <Box py={{ base: 6, md: 10 }} bg="white" id="contact">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 6, md: 8 }}>
          <Heading as="h2" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" fontWeight="bold" mb={3}>
            Контакты
          </Heading>
          <Box w="60px" h="3px" bg="brand.darkBlue" mx="auto" borderRadius="full" />
        </Box>
        <Box textAlign="center" mb={{ base: 4, md: 6 }}>
          <Text color="brand.darkGray" fontSize={{ base: 'md', md: 'lg' }} mb={{ base: 3, md: 4 }}>
            По вопросам сотрудничества обращайтесь по электронной почте
          </Text>
        </Box>
        <Flex justify="center">
          <Link href="mailto:partner@project_k01.ru" color="brand.darkBlue" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" _hover={{ textDecoration: 'underline', color: 'brand.darkGray' }}>
            partner@project_k01.ru
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
