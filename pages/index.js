import Head from 'next/head'
import NavigationBar from '../components/navigationBar';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from '../components/about';
import Contact from '../components/contact';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Kiran Methuku's Portfolio</title>
        <meta name="description" content="Kiran Methuku's Portfolio"/>
        <link rel="icon" href="/k.png" />
      </Head>

      <main>
        <NavigationBar/>
        <Intro/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>

      <footer>
        © 2021 | Coded with <img src="/coffee.png"/> by Kiran Methuku
      </footer>
    </div>
  )
}

export default Home;