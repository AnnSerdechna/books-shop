import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import './index.scss';

type FlexProps = {
  isVertical?: boolean;
  isFullWidth?: boolean;
  isBetween?: boolean;
  justify?: 'start' | 'center' | 'end' | 'space-between';
  align?: 'start' | 'center' | 'end';
  space?: 'sm' | 'md' | 'lg';
  noSpace?: boolean;
  className?: string;
  children: ReactNode;
};

export const Flex: FC<FlexProps> = ({ 
  isVertical = false, 
  isFullWidth = false, 
  align = 'center',
  justify = 'start',
  space = 'sm', 
  noSpace = false,
  className,
  children  
}) => (
  <div 
    className={classNames(
      'flex', 
      { isVertical }, 
      { noSpace },
      { alignStart: align === 'start' },
      { alignEnd: align === 'end' },
      { justifyEnd: justify === 'end' },
      { justifyCenter: justify === 'center' },
      { justifyBetween: justify === 'space-between' },
      { sm: space === 'sm' },
      { md: space === 'md' },
      { lg: space === 'lg' },
      { isFullWidth },
      className ?? ''
    )}
  >
    {children}
  </div>
)