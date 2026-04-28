import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { PlaylistProvider } from './contexts/PlaylistContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PlaylistProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          
        </CartProvider>    
      </PlaylistProvider>
    </ThemeProvider>
  </StrictMode>,
)
