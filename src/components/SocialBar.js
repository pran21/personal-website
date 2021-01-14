import React from 'react';
import linkedin_logo from '../assets/linkedin.svg'
import github_logo from '../assets/github.svg'
import email_logo from '../assets/email.svg'
import instagram_logo from '../assets/instagram.svg'

function SocialIcon(props) {
        return (
            <div id='socialicon'>
                <a href={props.href} target="_blank">
                    <img src={props.image_src} alt={props.type} height={props.size} width={props.size}/>
                </a>
            </div>
        )
}

export default class SocialBar extends React.Component {

    render(props) {
        return(
            <div id='socials'>
                <SocialIcon 
                    href="https://www.linkedin.com/in/praneeth-kanna/"
                    image_src={linkedin_logo}
                    type='LinkedIn'
                    size={this.props.iconSize}
                />
                <SocialIcon 
                    href="https://github.com/pran21"
                    image_src={github_logo}
                    type='LinkedIn'
                    size={this.props.iconSize}
                />
                <SocialIcon 
                    href="mailto: praneeth.v.kanna@gmail.com"
                    image_src={email_logo}
                    type='Email'
                    size={this.props.iconSize}
                />
                <SocialIcon 
                    href="https://www.instagram.com/praneeth.kanna/"
                    image_src={instagram_logo}
                    type='Instagram'
                    size={this.props.iconSize}
                />
            </div>
        );
    }
}