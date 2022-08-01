import React, { FC, useRef, useState } from 'react';

import './App.css';

import { pics } from './assets/index';

const App: FC = () => {
  const headerElRef = useRef<HTMLElement>(null);
  const mainElRef = useRef<HTMLDivElement>(null);
  const leftElRef = useRef<HTMLDivElement>(null);
  const rightElRef = useRef<HTMLDivElement>(null);
  const footerElRef = useRef<HTMLElement>(null);
  const [sortedPics, setSortedPics] = useState<String[]>(pics);
  const [btnColor, setBtnColor] = useState<String>('#fff');

  const randomizer = () => {
    const randomArr = sortedPics
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    setSortedPics(randomArr);
    setBtnColor(randomColor);
  };

  return (
    <div className="page">
      <header
        ref={headerElRef}
        className="header"
        style={{ backgroundImage: `url(${sortedPics[0]})` }}
      >
        Header
      </header>
      <div className="mainBody">
        <div ref={leftElRef} className="panel" style={{ backgroundImage: `url(${sortedPics[1]})` }}>
          Left Panel
        </div>
        <div ref={mainElRef} style={{ backgroundImage: `url(${sortedPics[2]})` }}>
          <span>Main Body</span>
          <button onClick={randomizer} style={{ backgroundColor: `#${btnColor}` }}>
            Click
          </button>
        </div>
        <div
          ref={rightElRef}
          className="panel"
          style={{ backgroundImage: `url(${sortedPics[3]})` }}
        >
          Right Panel
        </div>
      </div>
      <footer
        ref={footerElRef}
        className="footer"
        style={{ backgroundImage: `url(${sortedPics[4]})` }}
      >
        Footer
      </footer>
    </div>
  );
};

export default App;
