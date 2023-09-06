import React from 'react';
import { Header } from 'components/header';
import {ToolBar} from "components/toolBar";
import {DrawingBoard} from "components/drawingBoard";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <ToolBar/>
        <DrawingBoard/>
      </div>
    </div>
  );
}

export default App;
