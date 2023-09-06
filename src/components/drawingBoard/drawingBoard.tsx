import React from 'react';
import { useSelector } from "react-redux";
import { Canvas } from "../canvas/canvas";
import { ReducerState  } from 'types/index'

import './drawingBoard.scss';

export const DrawingBoard: React.FC = () => {
  const lineColor = useSelector((state: ReducerState) => state.lineColor.color);
  const lineWidth = useSelector((state: ReducerState) => state.lineWidth.size);

  return (
    <div className='drawing-board'>
      <Canvas lineColor={lineColor} lineWidth={lineWidth} />
    </div>
  );
};

