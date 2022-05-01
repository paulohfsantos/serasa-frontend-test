import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import "./style.scss";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <div className="top-section">
            <h1>Bem vindo(a)</h1>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="bottom-section">
            <p>
              Para acessar o formulário de avaliação, clique no botão abaixo.
            </p>

            <Link to="/form">Ir para o Formulário</Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;