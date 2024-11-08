import { FC, SVGProps } from 'react';

import Cart from './cart.svg?react';

const icons = {
  cart: Cart,
}

type SvgIconProps = SVGProps<SVGSVGElement> & { type: keyof typeof icons }

export const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null

  return Icon && <Icon {...svgProps} />
}
