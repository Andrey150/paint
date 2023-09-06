import React from 'react';

import './header.scss'

type Props = {};

export const Header: React.FC<Props> = (props) => {
  return (
    <div className='header'>
      <p>Paint</p>
    </div>
  );
};