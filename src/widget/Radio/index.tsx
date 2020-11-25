import React from 'react';
import styles from './index.module.less';

const Index = () => {
  return <>
    <span className={styles.check_node}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={styles.check_inner}
      >
        <circle cx="50" cy="50" r="30"></circle>
      </svg>
    </span>
  </>
};

export default Index;