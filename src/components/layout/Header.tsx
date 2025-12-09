import { Box, Container, Flex, Heading, Link, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box as="header" position="sticky" top={0} zIndex={1000} bg="rgba(255, 255, 255, 0.47)" backdropFilter="blur(10px)" borderBottom="1px" borderColor="brand.borderGray" py={{ base: 1, md: 3 }}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" direction="row" gap={{ base: 1, md: 0 }}>
          <Heading as="h1" size={{ base: 'md', md: 'lg' }} color="brand.darkGray">
            Project K01
          </Heading>
          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', md: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            color="brand.darkGray"
            size="lg"
            _hover={{ backgroundColor: 'transparent' }}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </IconButton>
          <Flex
            as="nav"
            gap={{ base: 2, md: 4 }}
            align="center"
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
            position={{ base: 'absolute', md: 'static' }}
            top={{ base: '100%', md: 'auto' }}
            left={0}
            right={0}
            bg={{ base: 'rgba(255, 255, 255, 0.93)', md: 'transparent' }}
            backdropFilter={{ base: 'blur(100px)', md: 'none' }}
            borderBottom={{ base: '1px', md: 'none' }}
            borderColor="brand.borderGray"
            py={{ base: 4, md: 0 }}
            px={{ base: 4, md: 0 }}
          >
            <Link href="#target-audience" onClick={handleLinkClick} color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Для кого
            </Link>
            <Link href="#services" onClick={handleLinkClick} color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Услуги
            </Link>
            <Link href="#advantages" onClick={handleLinkClick} color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Преимущества
            </Link>
            <Link href="#why-us" onClick={handleLinkClick} color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              О нас
            </Link>
            <Link href="#contact" onClick={handleLinkClick} color="brand.darkGray" _hover={{ color: 'brand.darkBlue' }} fontSize={{ base: 'md', md: 'md' }}>
              Контакты
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
