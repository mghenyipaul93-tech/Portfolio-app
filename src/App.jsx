import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
function App() {
return (
  <div>

    <nav>
<Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/projects">Projects</Link> |
      <Link to="/contact">Contact</Link> |
      <Link to="/profile">Profile</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

  </div>
 )
}

export default App
