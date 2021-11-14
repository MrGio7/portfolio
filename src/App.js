import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <div className="logo">Logo</div>
          <div className="navigation">
            <ul>
              <li>Home</li>
              <li>Education</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact Me</li>
              <li>Language</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
