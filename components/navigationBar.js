import { useState } from 'react'

const NavigationBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="nav">
        <a className="initials" href="/#intro"><img src="/k.png" width="25" height="auto"/><img src="/m.png" width="25" height="auto"/></a>
        <div>
          <a className="cv-download" href="/Kiran_Methuku_Resume.pdf" download>Download CV</a>
          <a href="/#about">About Me</a>
          <a href="/#projects">Projects</a>
          <a href="/#technologies">Technologies</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
      <div className="hamburger-nav">
        <a className="initials" href="/#intro"><img src="/k.png" width="15" height="auto"/><img src="/m.png" width="15" height="auto"/></a>
        <a className="hamburger" onClick={() => setClicked(!clicked)}><img src="/hamburger.png" width="22" height="auto"/></a>
      </div>
      {clicked &&
          <div className="hamburger-dropdown">
            <a className="cv-download" href="/Kiran_Methuku_Resume.pdf" download>Download CV</a>
            <a href="/#about" onClick={() => setClicked(!clicked)}>About Me</a>
            <a href="/#projects" onClick={() => setClicked(!clicked)}>Projects</a>
            <a href="/#technologies" onClick={() => setClicked(!clicked)}>Technologies</a>
            <a href="/#contact" onClick={() => setClicked(!clicked)}>Contact</a>
            <div className="contact-icons">
              <a href="https://www.github.com/kmethuku"><img src="/github-purple.png"/></a>
              <a href="https://www.linkedin.com/in/kiranmethuku0831"><img src="/linkedin-purple.png"/></a>
              <a href="mailto:kmethuku@protonmail.com"><img src="/mail-purple.png"/></a>
            </div>
          </div>
        }
    </div>
  )
}

export default NavigationBar;