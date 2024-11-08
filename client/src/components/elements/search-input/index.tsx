import { FC, InputHTMLAttributes } from 'react';

import { Button, Flex, Input, SvgIcon } from '../../ui';
import './index.scss';
import classNames from 'classnames';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onClear: VoidFunction;
};

export const SearchInput: FC<SearchInputProps> = ({ value, onClear, ...inputProps }) => {
  return (
    <Flex className={'search-wrap'} noSpace>
      <SvgIcon type={'search'} size={'md'} />
      <Input 
        value={value}
        className={'search-input'} 
        isOutlined={false} 
        {...inputProps}
      />
      <Button 
        icon={<SvgIcon type={'close'} />} 
        size={'sm'} 
        className={classNames('close-btn', {showClose: !!value})}
        onClick={onClear}
      />
    </Flex>
  )
}