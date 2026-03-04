import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="text-xl font-bold text-blue-600">Home</Link>
        <div className="flex items-center gap-4">
          <Link to="/signin" className="py-1.5 text-sm font-medium text-gray-700 transition hover:text-blue-600">Sign In</Link>
          <Link to="/signup" className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
