import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home, Experience, Projects, Contact } from "./components";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
    return this.state.loading ? (
      <div className="loading">Loading</div>
    ) : (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="portfolio" element={<Home />} />
          {/* <Route path="portfolio/experience" element={<Experience />} /> */}
          <Route path="portfolio/projects" element={<Projects />} />
          <Route path="portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
