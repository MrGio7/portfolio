import React from "react";
import greetingImg from "../../assets/img/greeting.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="home">
        <div className="greeting">
          <div className="text">
            <h1>Giorgi Bakashvili</h1>
            <p>
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
          </div>
            <img src={greetingImg} alt="greeting" />
        </div>
      </div>
    );
  }
}

export default Home;
