import {} from 'react'
import Typewriter from '../components/typewriter';

const Intro = () => {

  return (
    <div className="intro">
       <div className="intro-icons">
        <a href="https://www.github.com/kmethuku"><img src="/github.png"/></a>
        <a href="https://www.linkedin.com/in/kiranmethuku0831"><img src="/linkedin.png"/></a>
        <a href="mailto:kmethuku@protonmail.com?subject=Hey%20Kiran!"><img src="/mail.png" width="auto" height="45"/></a>
      </div>
      <div className="intro-text">
        <h1>Kiran Methuku</h1>
        <Typewriter/>
      </div>
    </div>
  )
}

export default Intro;