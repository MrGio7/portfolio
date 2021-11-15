import React from "react";
import greetingImg from "../../assets/img/greeting.jpg";
import serverImg from "../../assets/img/server.jpg";
import Particles from "react-tsparticles";
import { Icon } from '@iconify/react';

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
            <div className="social">
              <Icon icon="zmdi:github-box" />
              <Icon icon="logos:linkedin-icon" />
              <Icon icon="logos:google-gmail" />
              <Icon icon="logos:twitter" />
              <Icon icon="logos:facebook" />
              <Icon icon="logos:instagram-icon" />
            </div>
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
        <div className="main">
          <h1>What I Do?</h1>
          <div className="skills">
            <div className="webDev">
              <h1>Full Stack Development</h1>
              <div className="logos">
                <Icon icon="logos:html-5" />
                <Icon icon="logos:php" />
                <Icon icon="logos:css-3" />
                <Icon icon="logos:sass" />
                <Icon icon="logos:javascript" />
                <Icon icon="logos:react" />
                <Icon icon="logos:nodejs-icon" />
                <Icon icon="logos:python" />
                <Icon icon="logos:sqlite" />
                <Icon icon="logos:mysql" />
                <Icon icon="logos:mongodb" />
                <Icon icon="logos:npm-icon" />
                <Icon icon="logos:yarn" />
              </div>
              <ul>
                <li>&#128073;Building resposive website front end using React-Redux</li>
                <li>&#128073;Creating application backend in Node, Express</li>
                <li>&#128073;Developing mobile applications using Flutter, React Native</li>
              </ul>
            </div>
            <div className="cloud">
              <h1>Cloud Infra-Architecture</h1>
              <div className="logos">
                <Icon icon="logos:google-cloud" />
                <Icon icon="logos:aws" />
                <Icon icon="logos:azure-icon" />
                <Icon icon="logos:firebase" />
              </div>
              <ul>
                <li>Experience working on multiple cloud platforms</li>
                <li>Hosting and maintaining websites on virtual machine instances along with integration of databases</li>
                <li>Deploying deep learning models on cloud to use on mobile devices</li>
                <li>Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS</li>
              </ul>
              <img src={serverImg} alt="cloud" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
