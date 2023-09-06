import React from 'react';
import rectangle from 'img/rectangle.svg';
import circle from 'img/circle.svg';
import triangle from 'img/triangle.svg';
import brush from 'img/brush.svg';
import eraser from 'img/eraser.svg';
import {useDispatch} from "react-redux";
import { setLineColor } from 'actions/index'

import './toolBar.scss'

type Props = {};

export const ToolBar: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const attribute = e.currentTarget.getAttribute('data-attribute');
    if (attribute) {
      dispatch(setLineColor(attribute));
    }
  }
  return (
    <div className='toolbar'>
      <div className="row">
        <label className='title'>Shapes</label>
        <ul className='options'>
          <li className='option'>
            <img src={rectangle} alt="rectangle"/>
            <span>Rectangle</span>
          </li>
          <li className='option'>
            <img src={circle} alt="circle"/>
            <span>Circle</span>
          </li>
          <li className='option'>
            <img src={triangle} alt="triangle"/>
            <span>Triangle</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <label className='title'>Options</label>
        <ul className='options'>
          <li className='option'>
            <img src={brush} alt="brush"/>
            <span>Brush</span>
          </li>
          <li className='option'>
            <img src={eraser} alt="eraser"/>
            <span>Eraser</span>
          </li>
          <li className='option'>
            <input type="range"/>
          </li>
        </ul>
      </div>
      <div className="row">
        <label className='title'>Colors</label>
        <ul className='options color'>
          <button data-attribute="#fff" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#000" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#ff0000" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#0000ff" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#008000" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#ffff00" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#ffa500" onClick={handleClick}><li className='option'/></button>
          <button data-attribute="#808080" onClick={handleClick}><li className='option'/></button>
        </ul>
      </div>
      <div className="row">
        <button className="clear-canvas">Clear</button>
        <button className="save-img">Save image</button>
      </div>
    </div>
  );
};

