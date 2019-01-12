import React from 'react'

class Home extends React.Component {

  render() {
    return (
      <div className="home">
          <div className="lastName">
            <span>Amezcua,</span>
          </div>
          <div className="firstName">
            <span>Evan.</span>
          </div>
          <span className="webdev">&larr; developer</span>

          <p>about me</p>
          <p>This is where I explain who I am (Evan from Melbourne, front end developer), what I like to do (build web and mobile products with React/Native, work with cool designers who have good ideas), and what I'm good at(making products with hip new libraries and delivering functional and lean mvps with a heavy focus on front end development).</p>

      </div>
    )
  }
}

export default Home
