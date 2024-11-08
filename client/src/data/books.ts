import axios from 'axios';

import { BookProps } from '../../../data-types';

export const fetchBooks = async (): Promise<BookProps[]> => {
  const response = await axios.get(`http://localhost:4000/api/books`);

  return response.data as BookProps[];
};

export const fetchBookById = async (id: string): Promise<BookProps> => {
  const response = await axios.get(`http://localhost:4000/api/books/${id}`);

  return response.data as BookProps;
};