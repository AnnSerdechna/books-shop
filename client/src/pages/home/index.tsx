import { ChangeEvent, FC, memo, PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchInput, DrawerButton } from '../../components/elements';
import { Cart, Favorites } from '../../components/sections';
import { Flex } from '../../components/ui';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ padding: 24, margin: 8 }}>
    {children}
  </div>
)

const Search = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search') as string;

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event.target.value });
  };

  const handleClearSearchValue = () => {
    setSearchParams({ search: '' });
  };

  return (
    <SearchInput
      value={searchValue}
      onChange={handleSearchValueChange}
      onClear={handleClearSearchValue}
    />

  )
})

const Home: FC = () => {
  return (
    <Container>
      <Flex justify={'space-between'}>
        <Search />

        <Flex>
          <DrawerButton
            drawerTitle={'Favorites'}
            iconType={'heart'}
            footer={(
              <p>I am footer</p>
            )}

          >
            <Favorites />
          </DrawerButton>
          <DrawerButton
            drawerTitle={'Cart'}
            bageCount={2}
            iconType={'cart'}
            footer={(
              <p>I am footer</p>
            )}

          >
            <Cart />
          </DrawerButton>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Home