import React, { FC, useState, useRef, useMemo, useCallback } from 'react';
import { Card, Col, Row } from 'antd';
import DragComponent from '../../components/DragComponent';
import styles from './index.module.less';

interface IListData {
  id: number;
  type: string;
  value: string | undefined;
}

const fromBox = [
  {
    id: 1,
    type: 'p',
    value: 'p标签',
  },
  {
    id: 2,
    type: 'img',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605703865983&di=a35a43a3b9e866f1ee0048563bfd2577&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F5d8f2523322e3f4de91021701e95182c.jpeg',
  },
]
const Index: FC = () => {
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [formList, setFromList] = useState<IListData[]>(fromBox);
  const [toList, setToList] = useState<IListData[]>([]);
  const dragItemCurrentRef = useRef<IListData>();
  const dropAreaRef = useRef<HTMLDivElement>(null);


  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setIsDrag(true);
    // 计算是否在拖拽可放置区域 左侧对比
    // const dropRect = dropAreaRef.current?.getBoundingClientRect();
    // const { clientX } = e;
    // if (dropRect) {
    //   const { left } = dropRect;
    //   e.preventDefault();
    //   if (clientX > left) {
    //     console.log('进去了', clientX, left);
    //     setToList(his => {
    //       console.log('toList', toList);
    //      return [...his, dragItemCurrentRef.current!]
    //     })
    //   }
    // }
    // updateList(e.clientX, e.clientY);
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLElement>, data?: IListData) => {
    dragItemCurrentRef.current = data;
  }
  const handleDragEnd = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    // 计算是否在拖拽可放置区域 左侧对比
    const dropRect = dropAreaRef.current?.getBoundingClientRect();
    const { clientX } = e;
    if (dropRect) {
      const { left } = dropRect;
      e.preventDefault();
      if (clientX > left) {
        console.log('进去了', clientX, left);
        setToList(his => [...his, dragItemCurrentRef.current!])
      }
    }
    setIsDrag(false);
    console.log('end');
  }, []);

  return <>
    <Row gutter={16} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <Col span={4}>
        <Card className={styles.edit_box} data-type="drag" bordered={false}>
          {
            formList.map((item, index) =>
              (<DragComponent handleDragStart={(e) => handleDragStart(e, item)} key={item.id}>
                { item.type === 'p' ? <p>{item.value}</p> : <img alt="" src={item.value} />}
              </DragComponent>)
            )
          }
        </Card>
      </Col>
      <Col span={16}>
        <div className={styles.edit_box} data-type="container">
          <div className={styles.wrapper} ref={dropAreaRef}>
            {
              toList.map((item, index) =>
                (item.type === 'p'
                  ? <p className={styles.p} key={item.id + Math.random()}>{item.value}</p>
                  : <img alt="" key={item.id + Math.random()} src={item.value} />
                ))
            }
          </div>
        </div>
      </Col>
      <Col span={4}>
        <Card className={styles.edit_box} bordered={false}>
          Card text
        </Card>
      </Col>
    </Row>
  </>
};


export default Index