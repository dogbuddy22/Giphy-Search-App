import React from 'react';
import Description from './Description';

const Gif = props => (
  <li className="gif-wrap">
    <img alt="" src={props.url} />
    <Description description={props.description} />
  </li>
);

export default Gif;