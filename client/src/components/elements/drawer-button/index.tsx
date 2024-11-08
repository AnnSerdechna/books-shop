import { FC, Fragment, memo, ReactNode, useState } from 'react';

import { Badge, Button, SvgIcon, Drawer } from '../../ui';

type DrawerButtonProps = {
  drawerTitle?: string;
  footer?: ReactNode;
  bageCount?: number
  iconType: 'cart' | 'heart';
  children: ReactNode;
};

export const DrawerButton: FC<DrawerButtonProps> = memo(({
  iconType,
  bageCount = 0,
  drawerTitle,
  footer,
  children
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <Fragment>
      <Badge count={bageCount}>
        <Button
          icon={<SvgIcon type={iconType} size={'md'} />}
          onClick={handleToggleDrawer}
        />
      </Badge>

      <Drawer
        title={drawerTitle}
        isOpen={openDrawer}
        footer={footer}
        onClose={handleToggleDrawer}
      >
        {children}
      </Drawer>
    </Fragment>
  )
})