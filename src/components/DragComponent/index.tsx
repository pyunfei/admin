import React from 'react';
import styles from './index.module.less';

interface IProps {
  handleDragStart(e: React.DragEvent<HTMLDivElement>): void,
  children: React.ReactElement | null,
  style?: {} | undefined
}

const Index = (props: IProps) => {
  return <div className={styles.container} style={props.style} draggable onDragStart={(e) => props.handleDragStart(e)}>
    {props.children}
  </div>
};

export default Index;