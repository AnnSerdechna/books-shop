import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchBookById } from '../../data/books';

const Book = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: () => fetchBookById(id as string)
  });

  if (isLoading) return <p>Loading book...</p>;
  if (error) return <p>Error loading book.</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <img src={data?.imageUrl} alt={data?.title} style={{ width: 150, height: 200 }} />
    </div>
  )
}

export default Book;