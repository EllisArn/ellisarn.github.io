import '../CSS/App.css'
import '../CSS/AboutMe.css'

function About() {
  return (
    <>
      <div id="lebenslauf-container">
        <table>
          <h1>Lebenslauf Ellis Arn</h1>

          <tr>
            <td>Geburtsdatum</td>
            <td className="tdRight">27.08.2005</td>
          </tr>
          <tr>
            <td>Adresse</td>
            <td className="tdRight">Kanalstrasse 24, 5210 Windisch</td>
          </tr>
          <tr>
            <td>Geschwister</td>
            <td className="tdRight">
              Lilli (2001), Finn (2003), Sixten (2007)
            </td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td className="tdRight">Volleyball, Sportschiessen</td>
          </tr>
          <tr>
            <td>Handy</td>
            <td className="tdRight">078 340 00 04</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td className="tdRight">
              <a href="mailto:ellisarn@gmail.com">ellisarn@gmail.com</a>
            </td>
          </tr>

          <h2>Ausbildung</h2>
          <tr>
            <td>08/2012 - 04/2016</td>
            <td className="tdRight">
              Montessorischule Brugg, 1. bis 4. Klasse
            </td>
          </tr>
          <tr>
            <td>04/2016 - 07/2018</td>
            <td className="tdRight">
              Primarschule Dohlenzelg Windisch, 4. bis 6. Klasse
            </td>
          </tr>
          <tr>
            <td>08/2018 - 07/2021</td>
            <td className="tdRight">Bezirksschule Windisch</td>
          </tr>
          <tr>
            <td>seit 08/2021</td>
            <td className="tdRight">
              IMS Kanti Baden / BBBaden (Abschluss: 07/2024)
            </td>
          </tr>

          <h2>Kenntnisse & Fähigkeiten</h2>
          <tr>
            <h3>Sprachkenntnisse</h3>
            <td className="tdRight">
              <ul>
                <li>Deutsch (Muttersprache)</li>
                <li>Englisch (C1 -{'>'} Zertifikat Ende Jahr)</li>
                <li>Französisch (gut)</li>
              </ul>
            </td>
          </tr>

          <tr>
            <h3>Technische Fähigkeiten</h3>
            <td className="tdRight"> TBA </td>
          </tr>

          <tr>
            <h3>Referenzen</h3>
            <td className="tdRight">
              <ul>
                <li>
                  Lars Meyer <br />
                  Berufsfachschule BBB <br />
                  <a href="mailto:lars.meyer@bbbaden.ch">
                    lars.meyer@bbbaden.ch
                  </a>
                </li>
                <li>
                  Fabrice Thut <br />
                  Berufsfachschule BBB <br />
                  <a href="tel:0797350674">079 735 06 74</a>
                </li>
                <li>
                  Caroline Streif Schmid <br />
                  Kantonsschule Baden <br />
                  <a href="mailto:caroline.streif-schmid@kanti-baden.ch">
                    caroline.streif-schmid@kanti-baden.ch
                  </a>
                  <br />
                  <a href="tel:0784035220">078 403 52 20</a>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default About
