import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  icon?: ReactNode;
  size?: 'sm' | 'md' | '';
  isFullWidth?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ 
  icon, 
  text, 
  isFullWidth = false, 
  size = '',
  className,
  ...props 
}) => {
  return (
    <button 
      className={classNames(
        'button', 
        { sm: !text && size === 'sm'},
        { isFullWidth },
        { isIconOnly: !text },
        className ?? ''
      )} 
      {...props}
    >
      {!!icon && icon}
      {text}
    </button>
  )
}