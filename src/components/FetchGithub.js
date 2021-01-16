import React from 'react';

export default class FetchGitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingUser: true,
            repos: [],
        };
    }

    async componentDidMount() {
        const url = "https://api.github.com/users/" + this.props.user + "/repos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({loadingUser: false, repos: data})
    }

    render() {
        if (this.state.loadingUser) {
            return(<div>Loading Github profile...</div>);
        }

        if (!this.state.repos.length) {
            return(<div>Unable to get repos</div>);
        }

        const repoJsx = this.state.repos.map(repo=> (
            <div key={repo.id}>
                <div>{repo.name}</div>
                <div>{repo.description}</div>
                <div>{repo.updated_at}</div>
                <div>{repo.html_url}</div>
            </div>
        ))
        
        return <div>{repoJsx}</div>

    }
}