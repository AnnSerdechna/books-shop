import axios from 'axios';

import { AuthorProps } from '../../../data-types';

export const fetchAuthorById = async (id: string): Promise<AuthorProps[]> => {
  const response = await axios.get(`http://localhost:4000/api/authors/${id}`);

  return response.data as AuthorProps[];
};