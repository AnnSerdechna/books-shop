import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './index.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isBordered?: boolean;
  isOutlined?: boolean;
  className?: string;
};

export const Input: FC<InputProps> = ({
  isBordered = false,
  isOutlined = true,
  className,
  ...props
}) => {
  return (
    <input
      className={classNames(
        'input',
        { isBordered },
        {isOutlined },
        className ?? ''
      )}
      {...props}
    />
  )
}