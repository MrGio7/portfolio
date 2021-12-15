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
    this.setState({
      loading: false
    })
  }

  render() {
    return this.state.loading ? (
      <Loading/>
    ) : (
      <div className="App">
        <NavBar loading={<Loading/>}/>
        <Routes>
          <Route path="portfolio" element={<Home loading={<Loading/>} />} />
          <Route path="portfolio/projects" element={<Projects loading={<Loading/>} />} />
          <Route path="portfolio/contact" element={<Contact loading={<Loading/>} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
