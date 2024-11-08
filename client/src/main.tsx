import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import './styles/index.scss'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element:  <></>,
  },
  {
    path: "book/:id",
    element: <></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
