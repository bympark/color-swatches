import React, { Component } from 'react';
import TileContainer from '../../components/TileContainer';
import PageSelector from '../../components/PageSelector';
import styles from './Home.css';

// TODO get request from API for color list instead of importing json file
import { default as colors } from '../../resources/colors.json.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPage = nextProps.location.state.page;
    this.setState({page: nextPage})
  }

  render() {
    const size = colors.colorArray.length;
    const { page } = this.state;
    var pages = size / 12;
    if (size % 12 > 0) {
      pages++;
    };

    // const search = querystring.parse(window.location.search.substring(1));

    return(
      <div className={styles.home}>
        <div className={styles.main}>
          <TileContainer page={page}/>
        </div>

        <PageSelector pages={pages}/>
      </div>
    )
  }
}

export default Home;
