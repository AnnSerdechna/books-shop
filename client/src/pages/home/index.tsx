import { ChangeEvent, FC, useState } from 'react';

import { SearchInput } from '../../components/elements';

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearchValue = () => {
    setSearchValue('');
  };

  return (
    <div style={{padding: 24}}>
      <SearchInput 
        value={searchValue}
        onChange={handleSearchValueChange}
        onClear={handleClearSearchValue}  
      />
    </div>
  )
}

export default Home