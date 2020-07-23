import React from 'react';
import './styles.css';
import logo from '../assets/logo.png';
import computer from '../assets/computer.png';
import client2 from '../assets/guy.jpg';
import client1 from '../assets/girl.jpg';
import { FaCode, FaCss3, FaHtml5 } from 'react-icons/fa';

function Home(){
    return (
        <div className="container">
            <div className="header">
                <img  src={logo} alt="Logo do Aprender" />
            </div>
            <div className="hero">
                <div className="hero-title">
                    <h1>Desenvolva soluções incríveis</h1>
                    <p>Uma plataforma de aprendizado para alcançar<br></br> seu próximo nível como programador</p>
                    <button>Quero me cadastrar</button>
                </div>
                <img src={computer} alt="Computer and coffe" />
            </div>
            <div className="courses">
                <div className="course">
                    <FaCode className="icon" />
                    <h3>Lógica de programação</h3>   
                </div>
                <div className="course">
                    <FaHtml5 className="icon" />
                    <h3>Introdução à HTML</h3>   
                </div>
                <div className="course">
                    <FaCss3 className="icon" />
                    <h3>Introdução à CSS</h3>   
                </div>
            </div>
            <div className="testimonials">
                <div className="testimonial-card">
                    <img src={client1} alt="Client from Aprender" />
                    <div className="message">
                        <h3>Fernanda Pimentel</h3>
                        <p>"A plataforma é incrível e a 
                            metodologia dos cursos são de alcance para quem está começando ou 
                            quem já está avançado em alguma tecnologia."</p>
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src={client2} alt="Client from Aprender" />
                    <div className="testimonial-message">
                        <h3>Pedro Ferreira</h3>
                        <p>"Com muitos exercícios práticos e a ajuda da 
                        comunidade do Aprender, consegui passar em um processo 
                        seletivo"</p>
                    </div>
                </div>
            </div>
            <div className="pillars">
                <div className="pillar">
                    <div></div>
                    <h1>Teoria</h1>
                </div>
                <div className="pillar">
                    <div></div>
                    <h1>Conhecimento</h1>
                </div>
                <div className="pillar">
                    <div></div>
                    <h1>Comunidade</h1>
                </div>
            </div>
            <div className="plans-section">
                <h1>Junte-se à mais de 100 mil desenvolvedores</h1>
                <div className="prices-container">
                    <div className="price-card">
                        <h1>Starter</h1>
                        <h2>Grátis</h2>
                        <div className="features">
                            <p>Acesso à cursos gratuitos</p>
                            <p>Acesso à comunidade</p>
                        </div>
                        <button>Iniciar</button>
                    </div>
                    <div className="price-card recommended">
                        <h1>PRO</h1>
                        <h2>R$20,00 <span>mês</span></h2>
                        <div className="features">
                            <p>Funcionalidades do Starter</p>
                            <p>Acesso à cursos premium</p>
                        </div>
                        <button>Assinar PRO</button>
                    </div>
                    <div className="price-card">
                        <h1>Business</h1>
                        <h2>R$100,00 <span>mês</span></h2>
                        <div className="features">
                            <p>Funcionalidades do PRO</p>
                            <p>Suporte técnico</p>
                            <p>Treinamentos</p>
                        </div>
                        <button>Assinar</button>
                    </div>
                </div>
            </div>
            <footer>
                <img  src={logo} alt="Logo do Aprender" />
            </footer>
        </div>
    );
}

export default Home;