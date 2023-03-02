import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import App from './App.jsx'

const router = createBrowserRouter([{ path: '/', element: <App /> }])

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<App />)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
