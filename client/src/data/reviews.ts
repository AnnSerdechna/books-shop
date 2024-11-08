import axios from 'axios';

import { ReviewProps } from '../../../data-types';

export const fetchReviewsByBookId = async (bookId: string): Promise<ReviewProps[]> => {
  const response = await axios.get(`http://localhost:4000/api/reviews/${bookId}`);

  return response.data as ReviewProps[];
};