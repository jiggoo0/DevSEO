'use client';

import { FC, ElementType, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionWrapperProps {
  className?: string;
  as?: ElementType;
  id?: string;
  ariaLabel?: string;
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  as: Tag = 'section',
  id,
  ariaLabel,
}) => {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn('w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Tag>
  );
};

export default SectionWrapper;
