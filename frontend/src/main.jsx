import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Styles/main.css'
import routes from './Components/Routes.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
