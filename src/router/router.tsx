import { createBrowserRouter } from 'react-router-dom';

import {
  PREVIEW_PAGE,
  ARTICLES_PAGE,
  CASES_PAGE,
  INTERACTIVES_PAGE
} from './paths';

import PreviewPage from '../components/pages/PreviewPage/PreviewPage';
import ArticlesPage from '@/components/pages/ArticlesPage/ArticlesPage';
import CasesPage from '@/components/pages/CasesPage/CasesPage';
import InteractivesPage from '@/components/pages/InteractivesPage/InteractivesPage';

export const router = createBrowserRouter([
  {
    path: PREVIEW_PAGE,
    element: <PreviewPage />,
  },
  {
    path: ARTICLES_PAGE,
    element: <ArticlesPage />,
  },
  {
    path: CASES_PAGE,
    element: <CasesPage />,
  },
  {
    path: INTERACTIVES_PAGE,
    element: <InteractivesPage />,
  }
]);