import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Title, Flex, Button, SvgIcon } from '../../ui';
import './index.scss';
import { AuthorProps } from '../../../../../data-types';

type BookCardProps = {
  bookId: string
  imageUrl: string
  title: string
  author: AuthorProps
  price: number
};

export const BookCard: FC<BookCardProps> = ({ bookId, imageUrl, title, author, price }) => {
  return (
    <Link to={`/book/${bookId}`} className={'book-card'}>
      <div className={'book-card-image'}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={'book-card-bottom'}>
        <div className={'book-card-info'}>
          <Title level={3} className={'book-title'}>{title}</Title>
          <Title level={4} isSecondary>{author?.name}</Title>
        </div>
        <Flex justify={'space-between'}>
          <Title level={2}>{`${price}$`}</Title>
          <Button 
            text={'Buy'}
            icon={<SvgIcon type={'cart'} />}
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();              
            }}
          />
        </Flex>
      </div>
    </Link>
  )
}