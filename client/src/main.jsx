import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from '../src/pages/App'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Header from '../src/components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header />
        <main className="flex flex-1">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
