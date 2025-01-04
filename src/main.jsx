import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import ThemeContext from './AuthProvider/ThemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeContext>
  </StrictMode>,
)
