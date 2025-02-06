import { createBrowserRouter } from 'react-router-dom';

import {
  PREVIEW_PAGE,
} from './paths';

import PreviewPage from '../components/pages/PreviewPage/PreviewPage';

export const router = createBrowserRouter([
  {
    path: PREVIEW_PAGE,
    element: <PreviewPage />,
  }
]);