import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// main.jsx (correct)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <App />
    
  </StrictMode>
)
