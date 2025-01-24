import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './fish.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.js"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
