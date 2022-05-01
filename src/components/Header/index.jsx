import React from 'react';
import { Link } from 'react-router-dom';
import LogoComponent from '../Logo/Logo';
import Logo from '../../assets/serasa-logo-full.svg';
import './style.scss';
import Container from '../Container';

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <ul>
            <li>
              <Link to="/">
                <LogoComponent logo={Logo} />
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}

export default Header;