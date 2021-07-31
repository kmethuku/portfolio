import {} from 'react'
import Typewriter from '../components/typewriter';

const Intro = () => {

  return (
    <div className="intro" id="intro">
       <div className="intro-icons">
        <a href="https://www.github.com/kmethuku"><img src="/github-purple.png"/></a>
        <a href="https://www.linkedin.com/in/kiranmethuku0831"><img src="/linkedin-purple.png"/></a>
        <a href="mailto:kmethuku@protonmail.com"><img src="/mail-purple.png" width="auto" height="45"/></a>
      </div>
      <div className="intro-text">
        <h1>Kiran Methuku</h1>
        <Typewriter/>
      </div>
      <a className="down-arrow" href="/#about"><img src="/down-arrow.png" width="25" height="auto"/></a>
    </div>
  )
}

export default Intro;