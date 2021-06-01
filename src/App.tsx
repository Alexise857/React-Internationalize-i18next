import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import Translate from "./Translate";

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
} as any;

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Translate/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
    </div>
  );
}

export default App;
