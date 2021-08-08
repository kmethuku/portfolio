import {} from 'react';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Selected Projects</h2>
      <div className="project-content fitome">
        <div className="project-left-content first-project">
          <div className="project-title">
            <h3><a href="https://www.github.com/massimobergamin/remotetrainerfrontend">Fitome</a></h3>
            <a href="https://www.github.com/massimobergamin/remotetrainerfrontend"><img src="/external-link.png"/></a>
          </div>
          <p className="project-description">A client management tool for personal trainers. Trainers can assign workout plans and hold virtual training sessions using the video chat interface with integrated exercise timer.</p>
          <p className="project-description">
            <p><img src="/right-arrow.png"></img>Designed, developed, and deployed Fitome with a distributed Agile team of 4 developers using React, Redux, Node.js, and PostgreSQL</p>
            <p><img src="/right-arrow.png"></img>Configured PWA service worker to handle client-side caching and offline access with Google Workbox</p>
            <p><img src="/right-arrow.png"></img>Implemented state management and handled asynchronous operations with Redux</p>
            <p><img src="/right-arrow.png"></img>Designed and built an extensive relational database using PostgreSQL with Sequelize</p>
            <p><img src="/right-arrow.png"></img>Set up MVC-compliant RESTful API optimized to reduce network load</p>
          </p>
          <div className="project-tech">
            <img src="/wrench.png" width="32" height="auto"/>
            <p>React, Redux, SimplePeer, Socket.io, Google Workbox, Next.js, Firebase, Express, PostgreSQL</p>
          </div>
            <div className="multi-container"><img className="multi" src="/fitome-multi.png" width="500" height="auto"/></div>
        </div>
        <img className="gif" src="/fitome-gif.gif" width="200" height="auto"/>
      </div>
      <div className="project-content cardshare">
        <img className="gif cardshare-gif"  src="/cardshare-gif.gif" width="200" height="auto"/>
        <div className="project-left-content">
          <div className="project-title">
            <h3><a href="https://www.github.com/kmethuku/cardshare-client">Cardshare</a></h3>
            <a href="https://www.github.com/kmethuku/cardshare-client"><img src="/external-link.png"/></a>
          </div>
          <p className="project-description">A flashcard sharing application made for lifelong learners. Users can create decks, search for available decks, save and study decks using the flashcards interface, and more.</p>
          <p className="project-description">
            <p><img src="/right-arrow.png"></img>Designed, developed, and deployed Cardshare as solo developer using React, Node.js, and MongoDB</p>
            <p><img src="/right-arrow.png"></img>Implemented search logic using JSON data fetched via Google Books API</p>
            <p><img src="/right-arrow.png"></img>Implemented authentication and authorization with Firebase</p>
            <p><img src="/right-arrow.png"></img>Crafted a seamless and responsive cross-platform compatible UI using BEM CSS</p>
            <p><img src="/right-arrow.png"></img>Set up MVC-compliant RESTful API with Express and MongoDB</p>
          </p>
          <div className="project-tech">
            <img src="/wrench.png" width="32" height="auto"/>
            <p>TypeScript, React, Next.js, Firebase, Express, MongoDB, Jest, SuperTest</p>
          </div>
            <div className="multi-container"><img className="multi" src="/cardshare.png" width="500" height="auto"/></div>
        </div>
      </div>
    </div>
  )
}

export default Projects;