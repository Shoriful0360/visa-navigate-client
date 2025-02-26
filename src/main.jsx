import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Main.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
    <AuthProvider>

<RouterProvider router={router}></RouterProvider>
<Toaster   position="top-center"
  reverseOrder={false} />
  </AuthProvider>
    </div>
  </StrictMode>,
)
