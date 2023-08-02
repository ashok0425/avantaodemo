import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import NavHeader from '@components/nav/NavHeader.jsx'

import '@styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavHeader />
    <App />
  </React.StrictMode>
)
