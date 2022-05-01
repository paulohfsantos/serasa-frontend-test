import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';
import Container from '../../components/Container';
import FormCard from '../../components/FormCard';
import './style.scss';

const Form = () => {
  return (
    <>
      <section>
        <Container>
          <div className="top-section">
            <Link to="/">
              <Icon name="left-arrow" variant="light" />
            </Link>
            <h1>Formulário de Avaliação</h1>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="bottom-section">
            <p>
              Conte o quanto você está satisfeito com nossos serviços
            </p>
          </div>

          <FormCard />
        </Container>
      </section>
    </>
  );
}

export default Form;