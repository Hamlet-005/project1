import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Header />
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, aboutRoute]),
});
