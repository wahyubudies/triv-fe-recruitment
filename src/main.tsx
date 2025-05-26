import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/index.css";
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>,
);
