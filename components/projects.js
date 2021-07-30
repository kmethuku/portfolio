import {} from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <h2>Selected Projects</h2>
      <div className="project-content">
        <div>
          <div className="project-title">
            <h3>Cardshare</h3>
            <a href="https://www.github.com/kmethuku/cardshare-client"><img src="/github.png"/></a>
          </div>
          <p className="project-description">A flashcard sharing application made for lifelong learners. Users can create decks, search for available decks, save and study decks using the flashcards interface, and more.</p>
          <div className="project-tech">
            <img src="/tools.png" width="48" height="auto"/>
            <p>TypeScript, React, Next.js, Firebase, Express, MongoDB, Jest, Supertest</p>
          </div>
            <img src="/cardshare.png" width="500" height="auto"/>
        </div>
        <img src="/cardshare-gif.gif" width="200" height="auto"/>
      </div>
      <div className="project-content">
        <div>
          <div className="project-title">
            <h3>Fitome</h3>
            <a href="https://www.github.com/massimobergamin/remotetrainerfrontend"><img src="/github.png"/></a>
          </div>
          <p className="project-description">A client management tool for personal trainers. Trainers can assign workout plans and hold virtual training sessions using the video chat interface with integrated exercise timer.</p>
          <div className="project-tech">
            <img src="/tools.png" width="48" height="auto"/>
            <p>React, Redux, SimplePeer, Socket.io, Google WorkBox, Next.js, Firebase, Express, PostgreSQL</p>
          </div>
            <img className="fitome-multi" src="/fitome-multi.png" width="500" height="auto"/>
        </div>
        <img src="/fitome-gif.gif" width="200" height="auto"/>
      </div>
    </div>
  )
}

export default Projects;