import { Box } from '@chakra-ui/react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Advantages } from '@/components/sections/Advantages';
import { Process } from '@/components/sections/Process';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { FadeIn } from '@/components/ui/fade-in';

export function Content() {
  return (
    <Box as="main" flex="1">
      <Hero />
      <FadeIn>
        <TargetAudience />
      </FadeIn>
      <FadeIn delay={100}>
        <Services />
      </FadeIn>
      <FadeIn delay={200}>
        <Advantages />
      </FadeIn>
      <FadeIn delay={100}>
        <Process />
      </FadeIn>
      <FadeIn delay={200}>
        <WhyUs />
      </FadeIn>
      <FadeIn delay={100}>
        <Contact />
      </FadeIn>
    </Box>
  );
}
