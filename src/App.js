import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components";


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
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/about" element={<div />} />
        </Routes>
      </div>
    );
  }
}

export default App;
