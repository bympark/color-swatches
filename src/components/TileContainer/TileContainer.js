import React, { Component } from 'react';
import Tile from '../Tile';
import styles from './TileContainer.css';

// TODO get request from API for color list instead of importing json file
import { default as colors } from '../../resources/colors.json.js';

class TileContainer extends Component {
  constructor(props) {
    super(props);

    // set page state to current page query param
    this.state = {
      page: 1
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({page: nextProps.page});
  }

  // move logic to getDerivedStateFromProps

  render() {
    const { page } = this.state;
    const count = (page - 1) * 12;
    console.log(this.state);
    const size = colors.colorArray.length;
    const tiles = [];
    var finalIndex = count + 12;
    if (size <= finalIndex) {
      finalIndex = size;
    };

    for (var i = count; i < finalIndex; i++) {
      let index = colors.colorArray[i];
      tiles.push(
        // TODO key = hexadecimal
        <Tile key={i} color={index.color}/>
      );
    };
    return(
      <div className={styles.tileContainer}>
        {tiles}
      </div>
    )
  }
}

export default TileContainer;
