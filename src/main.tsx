import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Home from './routes/home';
import ErrorPage from './routes/ErrorPage';
import Post from './routes/post';
import Layout from './components/Layout';

import './index.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'posts/:userId',
        element: <Post />,
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

// const isDarkTheme = true;

// const darkThemeStyles = {
//   baseColor: '#374151', // Dark background for skeletons
//   highlightColor: '#151c2b', // Lighter highlight color for skeletons
// };

// const lightThemeStyles = {
//   baseColor: '#ebebeb', // Light background for skeletons
//   highlightColor: '#f5f5f5', // Light highlight color for skeletons
// };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        baseColor="#d5d4d3"
        highlightColor="#f2f0ef"
        // baseColor={
        //   isDarkTheme
        //     ? darkThemeStyles.baseColor
        //     : lightThemeStyles.baseColor
        // }
        // highlightColor={
        //   isDarkTheme
        //     ? darkThemeStyles.highlightColor
        //     : lightThemeStyles.highlightColor
        // }
        duration={2}
        // customHighlightBackground="linear-gradient(
        //   90deg,
        //   var(--base-color) 30%,
        //   #ffcccb 45%,
        //   var(--highlight-color) 60%,
        //   #add8e6 80%,
        //   var(--base-color) 100%
        // )"
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
    </QueryClientProvider>
  </StrictMode>
);
