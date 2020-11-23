import React from 'react';
import classNames from 'classnames';
// import './index.module.less';

export type size = 'lg' | 'sm';
export type type = 'primary' | 'default' | 'danger' | 'link';

interface IProps {
  type?: type;
  size?: size;
  href?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Index = (props: IProps) => {
  const { size, type, className, disabled, href, children, ...restProps } = props;

  const classes = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
  }, className)

  return (<>
    {
      type === 'link' && href
        ?
        <a href={href} className={classes} >
          {props.children}
        </a>
        :
        <button disabled={disabled} className={classes} {...restProps}>
          {children}
        </button>
    }
  </>)
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;