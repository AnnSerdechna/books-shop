import { FC, SVGProps } from 'react';

import {
  Cart,
  Close,
  Search,
  Heart
} from '../../../icons';
import './index.scss';
import classNames from 'classnames';

const icons = {
  cart: Cart,
  heart: Heart,
  close: Close,
  search: Search
};

type SvgIconProps = SVGProps<SVGSVGElement> & {
  type: keyof typeof icons ;
  size?: 'default' | 'md';
};

export const SvgIcon: FC<SvgIconProps> = ({ 
  type, 
  size = 'default',
  ...svgProps 
}) => {
  const Icon = icons[type] ?? null;

  return Icon && (
    <Icon 
      className={classNames(
        'svg-icon',
        {md: size === 'md'}
      )} 
      {...svgProps} 
    />
  )
}
