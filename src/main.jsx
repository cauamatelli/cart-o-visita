import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Visita from './Components/Visita.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Visita />
  </StrictMode>,
)
