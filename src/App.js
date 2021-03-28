import React, { useRef, useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import './App.css';

function App() {
  const background = useRef();
  const [tl, setTl] = useState("#"+(Math.random()*0xFFFFFF<<0).toString(16));
  const [tr, setTr] = useState("#"+(Math.random()*0xFFFFFF<<0).toString(16));
  const [bl, setBl] = useState("#"+(Math.random()*0xFFFFFF<<0).toString(16));
  const [br, setBr] = useState("#"+(Math.random()*0xFFFFFF<<0).toString(16));

  useEffect(()=>{
    if (background.current) {
      background.current.style.setProperty('--tl', tl);
      background.current.style.setProperty('--tr', tr);
      background.current.style.setProperty('--bl', bl);
      background.current.style.setProperty('--br', br);
    }
  }, [tl,tr,bl,br]);

  return (
    <div className="App grid-container">
      <div className="tl"><HexColorPicker color={tl} onChange={setTl} /></div>
      <div className="tr"><HexColorPicker color={tr} onChange={setTr} /></div>
      <div className="bl"><HexColorPicker color={bl} onChange={setBl} /></div>
      <div className="br"><HexColorPicker color={br} onChange={setBr} /></div>
      <div className="background" ref={background}><div className="code">{`.background {
  --tl: ${tl};
  --tr: ${tr};
  --bl: ${bl};
  --br: ${br};
  width: 100%;
  height: 100%;
  border: 1px solid white;
  position: relative;
  background: linear-gradient(90deg, var(--tl), var(--tr));
}

.background:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  mask-image: linear-gradient(to bottom, transparent, black);
  background: linear-gradient(90deg, var(--bl), var(--br));
}`}</div></div>
    </div>
  );
}

export default App;
