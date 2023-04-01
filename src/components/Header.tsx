import { FC } from 'react';
import { PATHICONS } from '../constants';
import '../styles/header.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <div>
        <p>Cat Clicker</p>
      </div>
      <div>
        {' '}
        <a className="footer-link" href="https://github.com/DarkNoriss" target="__blank">
          <img src={`${PATHICONS}github.svg`}></img>
          <p>DarkNoriss</p>
        </a>
      </div>
    </header>
  );
};
