import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/App.css'
import Layout from './pages/Layout'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import Homepage from './pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
