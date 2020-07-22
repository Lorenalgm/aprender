import React from 'react';
import './styles.css';

function Home(){
    return (
        <div className="container">
            <div className="header">
                <h1>Aprender</h1>
                <div className="menu">
                    <li>Entrar</li>
                </div>
            </div>
            <div className="hero">
                <div className="hero-title">
                    <h1>Desenvolva soluções incríveis</h1>
                    <p>Uma plataforma de aprendizado para alcançar seu próximo nível como programador</p>
                    <button>Quero participar</button>
                </div>
            </div>
            <div className="courses">
                <div className="course">
                    <h3>Introdução à lógica de programação</h3>   
                </div>
                <div className="course">
                    <h3>Introdução à HTML</h3>   
                </div>
                <div className="course">
                    <h3>Introdução à CSS</h3>   
                </div>
            </div>
        </div>
    );
}

export default Home;