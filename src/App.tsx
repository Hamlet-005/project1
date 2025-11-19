import { RouterProvider } from '@tanstack/react-router';
import { router } from './Routes';

export default function App() {
  return <RouterProvider router={router} />;
}
