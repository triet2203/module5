import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Element from "./lessons/ss1_ReactJs/Element.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Element />
  </StrictMode>,
)
