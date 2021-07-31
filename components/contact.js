import {} from 'react'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <h3>I'd love to hear from you! Feel free to reach out on LinkedIn or GitHub
        or shoot me an email at kmethuku@protonmail.com.
      </h3>
      <div className="contact-icons">
        <a href="https://www.github.com/kmethuku"><img src="/github.png"/></a>
        <a href="https://www.linkedin.com/in/kiranmethuku0831"><img src="/linkedin.png"/></a>
        <a href="mailto:kmethuku@protonmail.com"><img src="/mail.png" width="auto" height="45"/></a>
      </div>
    </div>
  )
}

export default Contact;