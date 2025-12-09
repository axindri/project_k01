import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface FadeInProps extends BoxProps {
  delay?: number;
  children: React.ReactNode;
}

export function FadeIn({ delay = 0, children, ...props }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(20px)'}
      transition={`opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`}
      {...props}
    >
      {children}
    </Box>
  );
}
