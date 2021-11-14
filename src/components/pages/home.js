import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return <div className="home">Home</div>;
  }
}

export default Home;
