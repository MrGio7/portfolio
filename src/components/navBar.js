import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      navOpened: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return this.state.loading ? (
      <div className="loading">Loading</div>
    ) : (
      <div className={this.state.navOpened ? "navBar opened" : "navBar"}>
        <div className="mbHeader">
          <div className="logo">Logo</div>
          <div className="burger">
            <input
              type="checkbox"
              id="toggle"
              className="burger"
              onClick={(ev) =>
                this.setState({ navOpened: !this.state.navOpened })
              }
            />
            <label className="bar1" htmlFor="toggle" />
            <label className="bar2" htmlFor="toggle" />
            <label className="bar3" htmlFor="toggle" />
          </div>
        </div>
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
