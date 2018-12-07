import React, { Component } from 'react';
import styles from './Sidebar.css';
import NavButton from '../../../components//NavButton';

import { default as colors } from '../../../resources/colors.json.js';


class Sidebar extends Component {
  render() {
    const size = colors.colorArray.length;
    const randomNumber = Math.floor(Math.random() * (size - 1));
    const color = colors.colorArray[randomNumber].color;
    const state = {color: color}
    const param = '?color=' + color;
    const pathname = '/color-swatches/Details';
    return(
      <div className={styles.sidebar}>
        <NavButton className={styles.randomColorButton} children="Random Color" pathname={pathname} state={state} param={param}/>
      </div>
    )
  }
}

export default Sidebar;
