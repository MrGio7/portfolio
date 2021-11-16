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
        return(
            <div className="experience">
                <div className="expCard">
                    <img src={experienceImg} alt="experience" />
                </div>
            </div>
        )
    }
}

export default Experience;