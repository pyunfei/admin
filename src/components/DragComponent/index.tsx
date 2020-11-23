import React from 'react';
// import propTypes from 'prop-types';
import styles from './index.module.less';

interface IProps {
  handleDragStart(e: React.DragEvent<HTMLDivElement>): void,
  children: React.ReactElement | null,
  style?: {} | undefined,
  restProps?: {} | undefined
}

const Index = (props: IProps) => {
  return (<div
    draggable
    className={styles.container}
    style={props.style}
    onDragStart={(e) => props.handleDragStart(e)}
    {...props.restProps}
  >
    {props.children}
  </div>)
};

// Index.propTypes = {};

// Index.defaultProps = {};

export default Index;