import { Box } from '@chakra-ui/react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Advantages } from '@/components/sections/Advantages';
import { Process } from '@/components/sections/Process';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';

export function Content() {
  return (
    <Box as="main" flex="1">
      <Hero />
      <TargetAudience />
      <Services />
      <Advantages />
      <Process />
      <WhyUs />
      <Contact />
    </Box>
  );
}
