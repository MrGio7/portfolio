import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home, Experience } from "./components";


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
          <Route path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
        </Routes>
      </div>
    );
  }
}

export default App;
