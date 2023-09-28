function Nav() {
  return (
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
  )
}

export default Nav
