import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from 'paths';

import Page from 'components/Page';
import PageLoading from 'components/PageLoading';

const Home = lazy(() => import('pages/Home'));
const Posts = lazy(() => import('pages/Posts'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Page>
         <Component />
      </Page>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.POSTS, element: getRouteElement(Posts) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) }
];

export default createBrowserRouter(routes);
