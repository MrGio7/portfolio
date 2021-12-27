import React from "react";
import greetingImg from "../../assets/img/greeting.jpg";
import codeImg from "../../assets/img/code.jpg";
import serverImg from "../../assets/img/server.jpg";
import { Icon } from "@iconify/react";

function Home({ Particles }) {
  const particleOptions = (img) => {
    return {
      background: {
        image: `url(${img})`,
        repeat: "no-repeat",
        size: "cover",
      },
      backgroundMask: {
        cover: {
          color: {
            value: "#19042c",
          },
        },
        enable: true,
      },
      interactivity: {
        events: {
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
            size: 100,
          },
        },
      },
      particles: {
        links: {
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
        },
        number: {
          density: {
            enable: true,
          },
          value: 130,
        },
        size: {
          random: {
            enable: true,
          },
          value: {
            min: 1,
            max: 40,
          },
          animation: {
            speed: 40,
            minimumValue: 0.1,
          },
        },
      },
    };
  };

  return (
    <div className="home">
      <div className="greeting">
        <div className="text">
          <h1>Giorgi Bakashvili</h1>
          <p>
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>
          <p>
            &#128073;Understanding HTML, have design skills and analytical
            knowledge.{" "}
          </p>
          <p>
            &#128073;Using JavaScript, constructing interactive web pages on
            both the client and server sides.
          </p>
          <p>&#128073;Using Git to track, regulate, and revise code changes.</p>
          <p>
            &#128073;Finding bugs, faults, or other irregularities in code and
            then fixing or changing them.
          </p>
          <p>
            &#128073;Know how to deploy codes. Deploying code entails putting it
            in the cloud, using SaaS providers like Amazon Web Services, and so
            on.
          </p>
          <div className="social">
            <a
              href="https://github.com/MrGio7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="zmdi:github-box" />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgi-bakashvili-87a174226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:linkedin-icon" />
            </a>
            <a
              href="mailto:lashagiorgi1233@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:google-gmail" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Icon icon="logos:twitter" />
            </a>
            <a
              href="https://www.facebook.com/giorgi.bakashvili.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:facebook" />
            </a>
            <a
              href="https://www.instagram.com/mr.gio7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:instagram-fill" color="#e8486d" />
            </a>
          </div>
        </div>
        <div className="particlesOne">
          <Particles id="tsparticles" options={particleOptions(greetingImg)} />
        </div>
      </div>
      <div className="main">
        <div className="skills">
          <div className="webDev">
            <div className="text">
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
                <li>
                  &#128073;Building resposive website front end using
                  React-Redux
                </li>
                <li>
                  &#128073;Styling website front end components using SASS, CSS
                </li>
                <li>&#128073;Creating application backend in Node, Express</li>
                <li>
                  &#128073;Developing mobile applications using React Native
                </li>
              </ul>
            </div>
            <div className="particlesThree">
              <Particles
                id="tsparticlesthree"
                options={particleOptions(codeImg)}
              />
            </div>
          </div>
          <div className="cloud">
            <div className="text">
              <h1>Cloud Infra-Architecture</h1>
              <div className="logos">
                <Icon icon="logos:google-cloud" />
                <Icon icon="logos:aws" />
                <Icon icon="logos:azure-icon" />
                <Icon icon="logos:firebase" />
              </div>
              <ul>
                <li>&#128073;Experience working on multiple cloud platforms</li>
                <li>
                  &#128073;Hosting and maintaining websites on virtual machine
                  instances along with integration of databases
                </li>
                <li>
                  &#128073;Deploying deep learning models on cloud to use on
                  mobile devices
                </li>
                <li>
                  &#128073;Setting up streaming jobs from DB to Server or
                  vice-versa on GCP and AWS
                </li>
              </ul>
            </div>
            <div className="particlesTwo">
              <Particles
                id="tsparticlestwo"
                options={particleOptions(serverImg)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
