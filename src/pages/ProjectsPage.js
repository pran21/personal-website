import React from 'react';
import FetchGitHub from '../components/FetchGithub';

export default class ProjectsPage extends React.Component {
    render() {
        return(
            <div>
                <FetchGitHub user='pran21'/>
            </div>
        )
    }
}