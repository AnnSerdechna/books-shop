import { FC, ReactNode } from 'react';

import './index.scss';

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
}

const classMap = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-xl',
  4: 'text-base',
  5: 'text-sm',
};

export const Title: FC<TitleProps> = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${Math.max(1, Math.min(6, level))}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`title ${classMap[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
