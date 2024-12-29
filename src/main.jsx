import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { AuthContext } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContext>
  </StrictMode>,
)
