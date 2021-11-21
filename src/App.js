import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading, NavBar, Home, Projects, Contact } from "./components";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      loading: false
    }), 1500)
  }

  render() {
    return this.state.loading ? (
      <Loading/>
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
