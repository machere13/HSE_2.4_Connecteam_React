import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import {
  MAIN_PAGE,
} from './paths';

import MainPage from '../pages/MainPage/MainPage';

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    element: <MainPage />,
  }
]);
