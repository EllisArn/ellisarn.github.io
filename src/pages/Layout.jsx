import { Outlet } from 'react-router-dom'
import '../CSS/Layout.css'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div id="grid-container">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
