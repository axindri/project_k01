import { Box, Container, Flex, Text, Link } from '@chakra-ui/react';
import { AlexLabsIcon } from '@/components/ui/icons';

export function Footer() {
  return (
    <Box as="footer" bg="brand.darkGray" py={6}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
          <Text color="brand.lightGray" fontSize={{ base: 'sm', md: 'md' }}>
            © 2025 Project K01. Все права защищены.
          </Text>

          <Link
            href="https://alexlabs.ru"
            target="_blank"
            rel="noopener noreferrer"
            color="brand.lightGray"
            fontSize="sm"
            textDecoration="none"
            display="flex"
            alignItems="center"
            gap={2}
            transition="opacity 0.2s"
            opacity={0.8}
            _hover={{ opacity: 1 }}
            _active={{ opacity: 1 }}
            _focus={{ opacity: 1 }}
          >
            Сайт разработан
            <AlexLabsIcon h="1.1rem" w="auto" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
