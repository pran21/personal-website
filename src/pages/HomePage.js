import React from 'react';
import { Link } from 'react-scroll';
import arrow from '../assets/down_arrow.svg'
import selectedArrow from '../assets/gray_down_arrow.svg'
import SocialBar from '../components/SocialBar'

function ScrollArrow(props) {
  return (
      <Link
      activeClass="active"
      to="bottom-section"
      spy={true}
      smooth={true}
      duration={1000}
      >
          <img 
            id='scroll-arrow'
            src={arrow} 
            onMouseOver={e => (e.currentTarget.src = selectedArrow)}
            onMouseOut={e => (e.currentTarget.src = arrow)}
            width="100" 
            height="100" 
            alt='arrow' />
      </Link>
  )
}

export default class HomePage extends React.Component {
    render() {
      return(
          <div>
            <div id='main-background'>
              <section id='top-section'>
                <div id='center-description'>
                  <h1 id="title-name">PRANEETH KANNA</h1>
                  <h4 className="short-description">Pursuing computer science and engineering through a college degree and self-learning.</h4>
                </div>
              </section>
              <div id='middle-section'>
                <SocialBar iconSize='60'/>
                <ScrollArrow />
              </div>
            </div>
            <section id='bottom-section'>
              <div className='dark-mode'>
                <h4 className='short-description'>Hey! I'm Praneeth</h4>
                <p className='description'>I’m a 19 year old from Cincinnati Ohio. I’m a 2nd year at UC Berkeley, studying Electrical Engineering and Computer Science, with an interest in robotics and computer vision with AI. I’m just a curious guy intrigued by the possibilities of what automation and machine learning are, and hope to pursue a career where I push the boundaries of these fields.</p>
                <p className='description'>My journey into the tech industry and leadership started with taking classes on Visual Basic during my freshman year of high school. I then went on to lead multiple clubs including Model UN and our school Honor Society, as well as building my tech skills to include several languages and a portfolio of projects.</p>
                <p className='description'>I’m currently working on some projects to build my machine learning and app development skills, as well as this website so I can learn about web development. I’m also looking for research positions and internships/work experience as well, so I’m sure to be busy this year.</p>
                <p className='description'>During my free time you can find me watching or playing basketball, making a new music playlist, eating waffles, or relaxing with friends and family.</p>
              </div>
              <div id='ventures'>
                <h4 id='ventures-title'>My future ventures (To learn/accomplish in 2021):</h4>
                <ul id='ventures-list'>
                  <li>Making a YouTube channel to document and showcase my projects/development process</li>
                  <li>Machine Learning / AI</li>
                  <li>Computer vision library (image / video processing)</li>
                  <li>Mobile app development</li>
                  <li>Creating my own customizable domain/hosting service</li>
                  <li>RESTful APIs</li>
                  <li>Personal datacenter / file servers w/ security</li>
                  <li>Embedded systems (IoT) with EE</li>
                  <li>Make a robot to play Valorant for me</li>
                </ul>
              </div>
              <div className='dark-mode'>
                <SocialBar iconSize='40'/>
              </div>
            </section>
          </div>
        
      );
    }
  }