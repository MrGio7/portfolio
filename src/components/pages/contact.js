import React from "react";
import { Icon } from "@iconify/react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return this.state.loading ? (
      <div className="loading">Loading</div>
    ) : (
      <div className="contact">
        <img
          src="https://avatars.githubusercontent.com/u/48259730?v=4"
          alt="avatar"
        />
        <div className="text">
          <h1>Contact Me</h1>
          <p>
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with ML, AI, React,
            Android, Cloud and Opensource Development.
          </p>
          <div className="icons">
            <a
              href="https://github.com/MrGio7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="zmdi:github-box" />
            </a>
            <a
              href="mailto:lashagiorgi1233@gmail.com"
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
          <div className="resume">See My Resume</div>
        </div>
      </div>
    );
  }
}

export default Contact;
