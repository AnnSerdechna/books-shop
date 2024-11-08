import { FC, memo } from 'react';

import { BookCard } from '../../elements';
import { BookProps } from '../../../../../data-types';
import './index.scss';

type BooksPageProps = {
  data: BookProps[] | undefined
  isLoading: boolean 
  error: Error | null
};

export const Books: FC<BooksPageProps> = memo(({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books.</p>;

  return (
    <div className={'books-container'}>
      {!!data?.length && data?.map(book => (
        <BookCard
          key={book?._id}
          bookId={book?._id}
          title={book?.title}
          imageUrl={book?.imageUrl}
          author={book?.author}
          price={book?.price}
        />
      ))}
    </div>
  )
})
