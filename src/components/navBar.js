import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
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
    );
  }
}

export default NavBar;
