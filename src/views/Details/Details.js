import React, { Component } from 'react';
import Tile from '../../components/Tile';
import NavButton from '../../components/NavButton';
import styles from './Details.css';

class Details extends Component {
  render() {
    const color= this.props.location.state;
    const pathname = '/';
    return(
      <div className={styles.details}>
        <div className={styles.mainTile}>
          <Tile color={color.color}/>
        </div>
        <div className={styles.footer}>
          <NavButton className={styles.clearButton} children="Clear" pathname={pathname} />
        </div>
      </div>
    )
  }
}

export default Details;
