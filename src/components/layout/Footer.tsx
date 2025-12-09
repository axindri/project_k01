import { Box, Container, Flex, Text, Link } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="brand.darkGray" py={6}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
          <Text color="brand.lightGray" fontSize="sm">
            © 2025 Project K01. Все права защищены.
          </Text>

          <Link href="https://alexlabs.ru/" target="_blank" rel="noopener noreferrer" color="brand.lightGray" fontSize="sm" textDecoration="none" transition="opacity 0.2s">
            Сайт разработан{' '}
            <Text as="span" fontWeight="bold">
              AlexLabs
            </Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
