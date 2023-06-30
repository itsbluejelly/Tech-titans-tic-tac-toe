import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/input.css'
import PlaySound from "./components/gametheme.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PlaySound />
  </React.StrictMode>
)
