import React, { Component } from 'react';
import logo from '../../../logo-symbol.svg';
import styles from './Header.css';

class Header extends Component {
  render() {
    return(
      <div className={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Header;
