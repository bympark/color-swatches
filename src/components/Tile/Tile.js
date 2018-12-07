import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Tile.css';

class Tile extends Component {
  render() {
    const { color } = this.props;

    const bgcolor = {
      "backgroundColor": color
    };

    return(
      <Link
        to={{
          pathname:'/color-swatches/Details',
          search: '?color=' + color,
          state: {color: color}
        }}
        className={styles.colorTile}
      >
        <div className={styles.colorBlock} style={bgcolor}>

        </div>
        <div className={styles.label}>
          {color}
        </div>
      </Link>
    )
  }
}

export default Tile;
