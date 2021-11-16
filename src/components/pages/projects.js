import React from "react";
import { Icon } from '@iconify/react';
import projectsImg from "../../assets/img/projects.jpg";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading ? (
      <div className="loading">Loading</div>
    ) : (
      <div className="projects">
        <div className="projectsCard">
            <img src={projectsImg} alt="projects" />
            <h1>Projects</h1>
            <p>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
        </div>
        <div className="projList">
            <div className="card">
                <h1>P.M. WebSite</h1>
                <h2>Complete Website</h2>
                <h3>Created on </h3>
                <div className="icons">
                    <Icon icon="logos:react" />
                    <Icon icon="logos:sass" />
                    <Icon icon="logos:nodejs-icon" />
                    <Icon icon="logos:sqlite" />
                    <Icon icon="logos:npm-icon" />
                </div>
                <div className="links">
                  <a href="https://p-m.netlify.com/" target="_blank"  rel="noreferrer">Site</a>
                  <a href="https://github.com/MrGio7/p.m.-site" target="_blank"  rel="noreferrer">Project</a>
                </div>
            </div>
            <div className="card">
                <h1>Website Template</h1>
                <h2>Website template with custom login support</h2>
                <h3>Created on </h3>
                <div className="icons">
                    <Icon icon="logos:react" />
                    <Icon icon="logos:sass" />
                    <Icon icon="logos:nodejs-icon" />
                    <Icon icon="logos:sqlite" />
                    <Icon icon="logos:npm-icon" />
                </div>
                <div className="links">
                  <a href="https://mrgio7.github.io/webpage/" target="_blank"  rel="noreferrer">Site</a>
                  <a href="https://github.com/MrGio7/webpage" target="_blank"  rel="noreferrer">Project</a>
                </div>
            </div>
            <div className="card">
                <h1>Trivia Online Game</h1>
                <h2>This is fully functional trivia game with custom login support</h2>
                <h3>Created on </h3>
                <div className="icons">
                    <Icon icon="logos:react" />
                    <Icon icon="logos:sass" />
                    <Icon icon="logos:nodejs-icon" />
                    <Icon icon="logos:sqlite" />
                    <Icon icon="logos:npm-icon" />
                </div>
                <div className="links">
                  <a href="https://mrgio7.github.io/trivia/" target="_blank"  rel="noreferrer">Site</a>
                  <a href="https://github.com/MrGio7/trivia" target="_blank"  rel="noreferrer">Project</a>
                </div>
            </div>
        </div>
            <a className="gitLink" href="https://github.com/MrGio7" target="_blank"  rel="noreferrer">More Projects</a>
      </div>
    );
  }
}

export default Projects;