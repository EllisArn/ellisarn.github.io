import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to="/about">Über mich</Link>
          </li>
          <li>
            <Link to="/projects">Projekte</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
