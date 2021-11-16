import React from "react";
import { Icon } from '@iconify/react';

class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state={
            loading: true
        }
    }

    componentDidMount(){
        this.setState({
            loading:false
        })
    }

    render(){
        return(
            this.state.loading ? <div className="loading">Loading</div> :
            <div className="contact">
                <img src="https://avatars.githubusercontent.com/u/48259730?v=4" alt="avatar" />
                <h1>Contact Me</h1>
                <p>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</p>
                <div className="icons">
                    <Icon icon="zmdi:github-box" />
                    <Icon icon="logos:linkedin-icon" />
                    <Icon icon="logos:google-gmail" />
                    <Icon icon="logos:twitter" />
                    <Icon icon="logos:facebook" />
                    <Icon icon="logos:instagram-icon" />
                </div>
                <div className="resume">See My Resume</div>
            </div>
        )
    }
}

export default Contact;