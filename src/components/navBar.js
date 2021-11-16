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
          <nav>
            <Link to="/" onClick={(ev) => this.setState({ navOpened: false })}>
              Home
            </Link>
            <Link to="experience">Experience</Link>
            {/* <Link>Education</Link>
            <Link>Experience</Link>
            <Link>Projects</Link>
            <Link>Contact Me</Link>
            <Link>Language</Link> */}
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
