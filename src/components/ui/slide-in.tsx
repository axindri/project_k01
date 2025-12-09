import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface SlideInProps extends BoxProps {
  direction?: 'left' | 'right';
  delay?: number;
  children: React.ReactNode;
}

export function SlideIn({ direction = 'left', delay = 0, children, ...props }: SlideInProps) {
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

  const transformX = direction === 'left' ? '-50px' : '50px';
  const finalTransform = 'translateX(0)';

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? finalTransform : `translateX(${transformX})`}
      transition={`opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`}
      {...props}
    >
      {children}
    </Box>
  );
}

