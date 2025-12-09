import { Box, Container, Heading, Text } from '@chakra-ui/react';

export function Hero() {
  return (
    <Box bg="brand.lightBg" py={{ base: 10, md: 16 }} id="hero">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" maxW="2xl" mx="auto" mb={{ base: 4, md: 6 }}>
          <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="brand.darkGray" mb={{ base: 2, md: 3 }}>
            Единое аналитическое хранилище данных
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="brand.darkGray" px={{ base: 2, md: 0 }}>
            Мы превращаем хаос данных в ясность. Project K01 устраняет пробелы между системами, командами и цифрами - создавая единый слой истины для бизнеса.
          </Text>
        </Box>
        <Box maxW="4xl" mx="auto">
          <Box
            bg="brand.lightBg"
            h={{ base: '200px', md: '300px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            border="1px"
            borderColor="brand.borderGray"
            borderStyle="dashed"
          >
            <Text color="brand.darkGray" fontSize={{ base: 'sm', md: 'md' }} opacity={0.5} textAlign="center" px={4}>
              [Фото: Пример дашборда аналитики или визуализация данных]
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
