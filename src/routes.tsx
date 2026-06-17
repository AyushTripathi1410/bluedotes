import { RouteObject } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import ProcessPage from './pages/process';
import ServicesPage from './pages/services/index';
import ServiceDetailPage from './pages/services/[id]';
import NotFoundPage from './pages/_404';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'process', element: <ProcessPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:id', element: <ServiceDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
