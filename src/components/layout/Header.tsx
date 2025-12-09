import { Box, Container, Flex, Heading, Link } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as="header" bg="white" borderBottom="1px" borderColor="brand.borderGray" py={{ base: 3, md: 5 }}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={{ base: 3, md: 0 }}>
          <Heading as="h1" size={{ base: 'md', md: 'lg' }} color="brand.darkGray">
            Project K01
          </Heading>
          <Flex as="nav" gap={{ base: 3, md: 6 }} align="center" direction={{ base: 'column', md: 'row' }}>
            <Link href="#target-audience" color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Для кого
            </Link>
            <Link href="#services" color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Услуги
            </Link>
            <Link href="#advantages" color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Преимущества
            </Link>
            <Link href="#why-us" color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              О нас
            </Link>
            <Link href="#contact" color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Контакты
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
