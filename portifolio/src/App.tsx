import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaPhp, FaNodeJs } from 'react-icons/fa';
import imageHeader from '../src/assets/imageHeader.png'; 
import profile from '../src/assets/profile.jpg'; // Adjust the path as necessary

import './App.css';

const App: React.FC = () => {
  const openTab = (evt: React.MouseEvent<HTMLButtonElement>, tabName: string) => {
    const tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName)!.style.display = 'block';
    evt.currentTarget.className += ' active';
  };

  const handleScroll = () => {
    const indicator = document.querySelector('.indicator') as HTMLElement;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    indicator.style.width = scrollPercentage + '%';

    const arrow = document.querySelector('.arrow') as HTMLElement;
    if (scrollTop > 300) {
      arrow.classList.remove('hidden');
    } else {
      arrow.classList.add('hidden');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.onscroll = handleScroll;
  }, []);

  return (
    <div>
      <div className="indicator"></div>
      <div className="arrow hidden" onClick={scrollToTop}>&#8593;</div>

      <header id="top" className="header-container">
        <div className="header-content">
          <div className="social-media">
            <h1>Vinicius Henrique</h1>
            <h2>front-end developer</h2>
            <a href="https://www.linkedin.com/in/vinicius-henrique-1a016524a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://github.com/vinihsr" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.instagram.com/vinicius.scss/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
            <img className="image" src={imageHeader} alt="Header" />
          </div>
        </div>
        <div className="scroll-down">
          Scroll Down
          <div className="arrow-icon">&#8595;</div>
        </div>
      </header>

      <main id="projects" className="container">
        <div className="tab">
          <button className="tablinks active" onClick={(e) => openTab(e, 'sobre')}>About</button>
          <button className="tablinks" onClick={(e) => openTab(e, 'projetos')}>Projects</button>
        </div>

        <div id="sobre" className="tabcontent" style={{ display: 'block' }}>
          <div className="sobre">
            <h4>
            Hello! My name is Vinicius Henrique, I'm 20 years old and I'm passionate about the world of programming. My journey began when I entered college at the age of 18 and since then I have immersed myself in this fascinating field. Before that, I worked in sales, following in my father's footsteps, but it was in programming that I found my true passion. I was born in Guaratinguetá, but since I was 7 years old I have lived in São José dos Campos. I have always been a fan of sports and music, they are my biggest hobbies and sources of inspiration. My experience in the programming area is brief, but intense. I learned a lot from the teaching methodologies at my college and, mainly, from my own determination and desire to learn. Today, I can't see myself working in any other area that isn't related to programming and software development. This is where I find stimulating challenges and the professional fulfillment that I so desire.
            </h4>
            <img src={profile} alt="Profile" />
          </div>
        </div>

        <div id="projetos" className="tabcontent">

        <div id="changedcard" className="card-container">
        <div className="card-container">
            <div className="card-text">
              <p>manager made for the family micro-company VL EMBALAGENS, this is my main project, in which I defined a solid system to manage the expenses and earnings of such a company. Link to the Project:</p>
              <a href="https://github.com/vinihsr/Gerenciador_vl" target="_blank" rel="noopener noreferrer">project</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '30px' }}>Gerenciador VL</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Dashboard</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Dashboard in Python to analyse some arquives and return in a beautiful dashboard using the framework Dash. Link to the Project:</p>
              <a href="https://github.com/vinihsr/dash_app" target="_blank" rel="noopener noreferrer">project</a>
            </div>
          </div>

        <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>crud in react, make to simulate a system of a restaurant, to register and view the menu... <br /> and this project was buided in this ip: <a id="linkExeption" href="http://3.144.249.248/" target="_blank" rel="noopener noreferrer">3.144.249.248</a>  (the backend was not running, to avoid spam)</p>
              <a href="http://vinihsr.github.io/SO_2/" target="_blank" rel="noopener noreferrer">project</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>SO TEST</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Cr1pt0gr4fe</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Cryptography to your passwords. Link to the Project:</p>
              <a href="https://github.com/vinihsr/Cr1pt0gr4fe" target="_blank" rel="noopener noreferrer">project</a>
            </div>
          </div>
          
          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>To-do list made with html, css and javascript. Link to the Project:</p>
              <a href="http://vinihsr.github.io/ToDoList/" target="_blank" rel="noopener noreferrer">project</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>To do list</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Password generator</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Automatic password generator made with html, css and javascript. Link to the Project:</p>
              <a href="http:////vinihsr.github.io/GeradorAutomatico/" target="_blank" rel="noopener noreferrer">project</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Calculator made with html, css and javascript. Link to the Project:</p>
              <a href="http://vinihsr.github.io/calculadora_js/" target="_blank" rel="noopener noreferrer">project</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>Calculator</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Automation projects</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Set of automation projects, including hardware automation and web automation. Link to repository on github:</p>
              <a href="http://github.com/vinihsr/projeto_de_automacao" target="_blank" rel="noopener noreferrer">repository</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Flappy bird replica game made purely with python. Link to repository on github:</p>
              <a href="http://github.com/vinihsr/flappy-bird-simplegame" target="_blank" rel="noopener noreferrer">repository</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>Flappy bird simple game</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '22px' }}>Data analysis with artificial intelligence</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Extraction and acquisition of data, adjustment, analysis, modeling and general interpretation of results. Link to repository on github:</p>
              <a href="http://github.com/vinihsr/analise_de_dados_com_IA" target="_blank" rel="noopener noreferrer">repository</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Testing sending Emails and SMS with python, using libraries for both (pandas/ pywin32/ twilio). Link to repository on github:</p>
              <a href="http://github.com/vinihsr/teste_envio_de_email_e_sms" target="_blank" rel="noopener noreferrer">repository</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '30px' }}>Email e Sms sending test</h2>
                <p>Check the link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '25px' }}>Java simple CRUD</h2>
                <p>Check the link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Simple CRUD project in Java with database interaction. Link to repository on github:</p>
              <a href="http://github.com/vinihsr/projeto_java_crud" target="_blank" rel="noopener noreferrer">repository</a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <ul className="skills">
          <h1>My skills:</h1>
          <li>
            <div className='icon'><FaHtml5 /></div>
            <p>HTML</p>
          </li>
          <li>
            <div className='icon'><FaCss3Alt /></div>
            <p>CSS</p>
          </li>
          <li>
            <div className='icon'><FaJsSquare /></div>
            <p>JavaScript</p>
          </li>
          <li>
            <div className='icon'><FaReact /></div>
            <p>React</p>
          </li>
          <li>
            <div className='icon'><FaNodeJs /></div>
            <p>Node</p>
          </li>
          <li>
            <div className='icon'><FaPython /></div>
            <p>Python</p>
          </li>
          <li>
            <div className='icon'><FaPhp /></div>
            <p>Php</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
