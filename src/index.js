import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Navbar extends React.Component {
  render() {
      return(
          <div>
              <ul id='nav'>
                <li><a href="#">Praneeth Kanna</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
          </div>
      );
  }
}

class App extends React.Component {
  render() {
    return(
        <div>
          <div id='main-background'>
          <Navbar />
          <section>
            <div className='centerdescription'>
              <h1 id="title-name">PRANEETH KANNA</h1>
              <h4 id="short-description">Pursuing computer science and engineering through a college degree and self-learning.</h4>
            </div>
          </section>
          </div>
          <section id='bottom-section'>
            <h4>Hey! I'm Praneeth</h4>
            <p className='description'>I’m a 19 year old from Cincinnati Ohio. I’m a 2nd year at UC Berkeley, studying Electrical Engineering and Computer Science, with an interest in robotics, basketball, hip hop, cars, and eating waffles. I’m just a curious guy intrigued by the possibilities of what automation and machine learning are, and hope to pursue a career where I push the boundaries of these fields.</p>
            <p className='description'>My journey into the tech industry and leadership started with taking classes on Visual Basic during my freshman year of high school. I then went on to lead multiple clubs including Model UN and our school Honor Society, as well as building my tech skills to include several languages and a portfolio of projects.</p>
            <p className='description'>I’m currently working on some projects to build my machine learning and app development skills, as well as this website so I can learn about web development. I’m also looking for research positions and internships/work experience as well, so I’m sure to be busy this year.</p>
            <p className='description'>During my free time you can find me watching or playing basketball, making a new music playlist, or relaxing with friends and family.</p>
          </section>
        </div>
      
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
