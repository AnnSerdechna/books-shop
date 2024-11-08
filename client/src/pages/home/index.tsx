import { ChangeEvent, FC, memo, PropsWithChildren, useState } from 'react';

import { SearchInput } from '../../components/elements';
import { Badge, Button, Flex, SvgIcon } from '../../components/ui';
import { Cart } from '../../components/sections';

const Container: FC<PropsWithChildren> = memo(({ children }) => (
  <div style={{ padding: 24 }}>
    {children}
  </div>
)
)

const Search = memo(() => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearchValue = () => {
    setSearchValue('');
  };
  return (
    <SearchInput
      value={searchValue}
      onChange={handleSearchValueChange}
      onClear={handleClearSearchValue}
    />

  )
})

const End: FC<{ favCount: number }> = memo(({ favCount  }) => {

  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const onFav = () => setShowFavorites(!showFavorites)

  const onCart = () => setShowCart(!showCart)

  return (
    <Flex>
      <Badge count={favCount}>
        <Button
          icon={<SvgIcon type={'heart'} size={'md'} />}
          onClick={onFav}
        />
      </Badge>
      <Cart />
    </Flex>
  )
})

const Home: FC = () => {
  
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);



  return (
    <Container>
      <Flex justify={'space-between'}>
        <Search />

        <End favCount={5} />
     
        {/* <Flex>
          <Badge count={2}>
            <Button 
              icon={<SvgIcon type={'heart'} size={'md'} />} 
              onClick={() => setShowFavorites(!showFavorites)}
            />
          </Badge>
          <Badge count={1}>
            <Button 
              icon={<SvgIcon type={'cart'} size={'md'} /> } 
              onClick={() => setShowCart(!showCart)}
            />
          </Badge>
        </Flex> */}
      </Flex>
    </Container>
  )
}

export default Home