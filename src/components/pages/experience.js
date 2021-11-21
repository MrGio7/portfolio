import React from "react";
import experienceImg from "../../assets/img/experience.jpg";

class Experience extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        return this.state.loading ? (
          this.props.loading
        ) : (
          <div className="experience">
            <div className="expCard">
              <img src={experienceImg} alt="experience" />
              <div className="text">
                <h1>Experience</h1>
                <h2>Work & Internship</h2>
                <p>
                  I have worked with many evolving startups as ML and DL
                  Developer, Designer and Software Architect. I have also worked
                  with some well established companies mostly as AI Developer. I
                  love organising events and that is why I am also involved with
                  many opensource communities as a representative.
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Experience;