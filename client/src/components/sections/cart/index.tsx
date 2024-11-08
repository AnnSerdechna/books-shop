import { FC, Fragment, useState } from 'react';
import { Badge, Button, SvgIcon } from '../../ui';

import './index.scss';
import { Drawer } from '../../ui/drawer';

type CartContentProps = {}

const CartContent: FC<CartContentProps> = () => {
  return (
     <section>
      
     </section>
  )
}

export const Cart: FC = () => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => setShowCart(!showCart);
  return (
    <Fragment>
      <Badge count={1}>
        <Button
          icon={<SvgIcon type={'cart'} size={'md'} />}
          onClick={handleToggleCart}
        />
      </Badge>

      <Drawer 
        title={'Card'}
        isOpen={showCart}
        onClose={handleToggleCart}
      >
        <CartContent />
      </Drawer>
    </Fragment>
  )
}