import React from "react";
import { Link } from "react-router-dom";

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
          <div
            className={this.state.navOpened ? "burger opened" : "burger"}
            onClick={(ev) =>
              this.setState({ navOpened: !this.state.navOpened })
            }
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className="navigation">
          <div className="list">
            <Link to="portfolio" onClick={() => this.setState({ navOpened: false })}>
              Home
            </Link>
            {/* <Link to="portfolio/experience" onClick={() => this.setState({ navOpened: false })}>Experience</Link> */}
            <Link to="portfolio/projects" onClick={() => this.setState({ navOpened: false })}>Projects</Link>
            <Link to="portfolio/contact" onClick={() => this.setState({ navOpened: false })}>Contact Me</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
