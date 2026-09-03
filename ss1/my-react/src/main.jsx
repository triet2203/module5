import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Element from "./lessons/ss1_ReactJs/Element.jsx";
import SignInForm from "./lessons/ss1_ReactJs/SignInForm.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignInForm />
  </StrictMode>,
)
