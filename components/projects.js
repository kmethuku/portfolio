import {} from 'react';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Selected Projects</h2>
      <div className="project-content cardshare">
        <div className="project-left-content first-project">
          <div className="project-title">
            <h3><a href="https://www.github.com/kmethuku/cardshare-client">Cardshare</a></h3>
            <a href="https://www.github.com/kmethuku/cardshare-client"><img src="/external-link.png"/></a>
          </div>
          <p className="project-description">A flashcard sharing application made for lifelong learners. Users can create decks, search for available decks, save and study decks using the flashcards interface, and more.</p>
          <div className="project-tech">
            <img src="/wrench.png" width="32" height="auto"/>
            <p>TypeScript, React, Next.js, Firebase, Express, MongoDB, Jest, SuperTest</p>
          </div>
            <div class="multi-container"><img className="multi" src="/cardshare.png" width="500" height="auto"/></div>
        </div>
        <img className="gif"  src="/cardshare-gif.gif" width="200" height="auto"/>
      </div>
      <div className="project-content fitome">
        <img className="gif fitome-gif" src="/fitome-gif.gif" width="200" height="auto"/>
        <div className="project-left-content">
          <div className="project-title">
            <h3><a href="https://www.github.com/massimobergamin/remotetrainerfrontend">Fitome</a></h3>
            <a href="https://www.github.com/massimobergamin/remotetrainerfrontend"><img src="/external-link.png"/></a>
          </div>
          <p className="project-description">A client management tool for personal trainers. Trainers can assign workout plans and hold virtual training sessions using the video chat interface with integrated exercise timer.</p>
          <div className="project-tech">
            <img src="/wrench.png" width="32" height="auto"/>
            <p>React, Redux, SimplePeer, Socket.io, Google WorkBox, Next.js, Firebase, Express, PostgreSQL</p>
          </div>
            <div class="multi-container"><img className="multi" src="/fitome-multi.png" width="500" height="auto"/></div>
        </div>
      </div>
    </div>
  )
}

export default Projects;