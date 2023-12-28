import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { zonesApi } from './store/apicall.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<ApiProvider api={zonesApi}>
    <App />
		</ApiProvider>
  </React.StrictMode>,
)
