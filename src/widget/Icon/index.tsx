import React from 'react';

interface IProps {
  icon: string;
}

const Index = (props: IProps) => {
  const { icon, ...restProps } = props;
  return <>
    <svg aria-hidden="true" {...restProps}>
      {/* <use {...{ attrs: { 'xlink:href': `#${props.icon}` } }} /> */}
    </svg>
  </>
};

export default Index;