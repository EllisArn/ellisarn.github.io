import '../CSS/App.css'
import '../CSS/Contact.css'

function Contact() {
  return (
    <>
      <div id="contact-container">
        <p id="info">
          Falls Sie mich gerne näher kennenlernen würden oder Fragen haben,
          schreiben Sie mir ruhig.<br/>Erreichbar bin ich wie folgt:
        </p>
        <div>
          <p id="email">E-Mail</p>
          <a href="mailto:ellisarn@gmail.com">ellisarn@gmail.com</a>
        </div>
        <div>
          <p id="handy">Handy</p>
          <a href="tel:+41783400004">+41 78 340 00 04</a>
        </div>
      </div>
    </>
  )
}

export default Contact
