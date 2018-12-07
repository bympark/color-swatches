import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageSelector.css'

class PageSelector extends Component {
  render() {
    const { pages } = this.props;
    const pageNumbers = [];
    for(var i = 1; i <= pages; i++) {
      pageNumbers.push(
        <Link
          key={i}
          to={{
            pathname:'/',
            search: '?page=' + i,
            state: { page: i}
          }}
        >{i}</Link>
      );
    };

    return(
      <div className={styles.pageSelector}>
        {pageNumbers}
      </div>
    )
  }
}

export default PageSelector;
