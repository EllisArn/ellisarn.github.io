import { Outlet } from 'react-router-dom'
import '../CSS/Layout.css'

export default function Layout() {
  return (
    <div id="grid-container">
      <nav>
        <a className="nav-element" href="/">
          <img id="logo" src="./src/assets/EA.svg" alt="logo" />
        </a>
        <ul id="navbuttons-list">
          <li>
            <a className="nav-element" href="/">
              Startseite
            </a>
          </li>
          <li>
            <a className="nav-element" href="/about">
              Über mich
            </a>
          </li>
          <li>
            <a className="nav-element" href="/projects">
              Projekte
            </a>
          </li>
          <li>
            <a className="nav-element" href="/contact">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <div id="copyright">
          All Rights Reserved <span>&copy;</span> 2023{' '}
          <strong>Ellis Arn</strong>
        </div>
      </footer>
    </div>
  )
}
