import { FC } from 'react';

import { Button } from '../../components/ui/button';
import { SvgIcon } from '../../icons';

const Home: FC = () => {
  return (
    <Button icon={<SvgIcon type={'cart'} />} />
  )
}

export default Home