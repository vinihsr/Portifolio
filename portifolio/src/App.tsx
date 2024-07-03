import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaPhp } from 'react-icons/fa';

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
            <h2>Desenvolvedor front-end</h2>
            <a href="https://www.linkedin.com/in/vinicius-henrique-1a016524a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://github.com/vinihsr" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.instagram.com/vinicius.scss/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
            <img className="image" src="../src/assets/imageHeader.png" alt="Header" />
          </div>
        </div>
        <div className="scroll-down">
          Scroll Down
          <div className="arrow-icon">&#8595;</div>
        </div>
      </header>

      <main id="projects" className="container">
        <div className="tab">
          <button className="tablinks active" onClick={(e) => openTab(e, 'sobre')}>Sobre</button>
          <button className="tablinks" onClick={(e) => openTab(e, 'projetos')}>Projetos</button>
        </div>

        <div id="sobre" className="tabcontent" style={{ display: 'block' }}>
          <div className="sobre">
            <h4>
              Olá! Meu nome é Vinicius Henrique, tenho 20 anos e sou apaixonado pelo mundo da programação.
              Minha jornada começou quando entrei na faculdade aos 18 anos e desde então mergulhei de cabeça nessa área fascinante.
              Antes disso, eu trabalhava com vendas, seguindo os passos do meu pai, mas foi na programação que encontrei minha verdadeira paixão.
              Nasci em Guaratinguetá, mas desde os 7 anos moro em São José dos Campos. Sempre fui aficionado por esportes e música,
              são meus maiores hobbies e fontes de inspiração. Minha experiência na área de programação é breve, mas intensa.
              Aprendi muito com as metodologias de ensino da minha faculdade e, principalmente, com minha própria determinação e vontade de aprender.
              Hoje, não consigo me ver trabalhando em outra área que não esteja relacionada à programação e ao desenvolvimento de softwares.
              É aqui que encontro desafios estimulantes e a realização profissional que tanto almejo.
            </h4>
            <img src="../src/assets/profile.jpg" alt="Profile" />
          </div>
        </div>

        <div id="projetos" className="tabcontent">
          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Lista de afazeres feito com html, css e javascript. Link para o Projeto:</p>
              <a href="http://vinihsr.github.io/ToDoList/" target="_blank" rel="noopener noreferrer">projeto</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>To do list</h2>
                <p>Confira o link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Password generator</h2>
                <p>confira o link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Gerador de senhas automatico feito com html, css e javascript. Link para o Projeto:</p>
              <a href="http:////vinihsr.github.io/GeradorAutomatico/" target="_blank" rel="noopener noreferrer">projeto</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Calculadora feita com html, css e javascript. Link para o Projeto:</p>
              <a href="http://vinihsr.github.io/calculadora_js/" target="_blank" rel="noopener noreferrer">projeto</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>Calculator</h2>
                <p>confira o link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Automation projects</h2>
                <p>confira o link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Conjunto de projetos de automação, incluindo automação de hardware e automação web. Link para o repositório no github:</p>
              <a href="http://github.com/vinihsr/projeto_de_automacao" target="_blank" rel="noopener noreferrer">repositório</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Jogo réplica de Flappy bird feito puramente com python. Link para o repositório no github:</p>
              <a href="http://github.com/vinihsr/flappy-bird-simplegame" target="_blank" rel="noopener noreferrer">repositório</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2>Flappy bird simple game</h2>
                <p>confira o link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card-wrapper">
              <h2 style={{ fontSize: '25px' }}>Data analysis with artificial intelligence</h2>
              <p>confira o link</p>
            </div>
            <div className="card-text">
              <p>Extração e obtenção de dados, ajuste, analise, modelagtem e interpretação geral de resultados. Link para o repositório no github:</p>
              <a href="http://github.com/vinihsr/analise_de_dados_com_IA" target="_blank" rel="noopener noreferrer">repositório</a>
            </div>
          </div>

          <div id="changedcard" className="card-container">
            <div className="card-text">
              <p>Teste de envio de Emails e Sms com python, utilizando bibliotecas para ambos(pandas/ pywin32/ twilio). Link para o repositório no github:</p>
              <a href="http://github.com/vinihsr/teste_envio_de_email_e_sms" target="_blank" rel="noopener noreferrer">repositório</a>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '30px' }}>Email e Sms sending test</h2>
                <p>confira o link</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2 style={{ fontSize: '25px' }}>CRUD simples em Java</h2>
                <p>confira o link</p>
              </div>
            </div>
            <div className="card-text">
              <p>Projeto CRUD simples em java com interação no banco de dados. Link para o repositório no github:</p>
              <a href="http://github.com/vinihsr/projeto_java_crud" target="_blank" rel="noopener noreferrer">repositório</a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h1>Minhas Habilidades:</h1>
        <ul className="skills">
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