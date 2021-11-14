import React from "react";
import greetingImg from "../../assets/img/greeting.jpg";
import Particles from "react-tsparticles";

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
          <Particles
            id="tsparticles"
            options={{
              position: "relative",
              background: {
                color: {
                  value: "#ffffff",
                },
                image: `url(${greetingImg})`,
                position: "relative",
                repeat: "no-repeat",
                size: "cover",
              },
              backgroundMask: {
                cover: {
                  color: {
                    value: "#32144f",
                  },
                },
                enable: true,
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                      force: 60,
                    },
                  },
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 1,
                    size: 100,
                  },
                  grab: {
                    distance: 400,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: {
                    value: "#ffffff",
                  },
                  distance: 150,
                  enable: true,
                },
                move: {
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  enable: true,
                  outModes: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 80,
                },
                opacity: {
                  animation: {
                    speed: 1,
                    minimumValue: 0.1,
                  },
                },
                size: {
                  random: {
                    enable: true,
                  },
                  value: {
                    min: 1,
                    max: 30,
                  },
                  animation: {
                    speed: 40,
                    minimumValue: 0.1,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
