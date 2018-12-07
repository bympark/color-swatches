import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Frame.css';

class Frame extends Component {
  render() {
    return(
      <div className={styles.frame}>
        <Header/>
        <Sidebar/>
      </div>
    )
  }
}

export default Frame;
