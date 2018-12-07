import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavButton.css';

class NavButton extends Component {
  render() {
    const { pathname, param, state } = this.props;
    return(
      <Link
        className={styles.button}
        to={{
          pathname: pathname,
          search: param,
          state: state
        }}
      >
        {this.props.children}
      </Link>
    )
  }
}

export default NavButton;
