import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  isFullWidth?: boolean;
};

export const Button: FC<ButtonProps> = ({ 
  icon, 
  text, 
  isFullWidth = false, 
  ...props 
}) => {
  return (
    <button className={classNames('button', { isFullWidth })} {...props}>
      {!!icon && icon}
      {text}
    </button>
  )
}