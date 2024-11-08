import { FC, ReactNode } from 'react';

import './index.scss';

type BadgeProps = {
  count: number;
  children: ReactNode;
};

export const Badge: FC<BadgeProps> = ({ count, children }) => {
  return (
    <div className={'badge'}>
      {!!count && <span className={'count'}>{count}</span>}
      {children}
    </div>
  )
}