import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Omit, tuple } from '../../utils/type';
import classNames from 'classnames';
import './index.css';

interface IProps {
  size?: size;
  type?: type;
  loading?: boolean | { delay?: number };
  shape?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  // onClick?: () => void;
}

const types = tuple('default', 'primary', 'dashed', 'link', 'danger');
export type type = typeof types[number];
const sizes = tuple('large', 'small');
export type size = typeof sizes[number];
const htmlType = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof htmlType[number];

export type Loading = number | boolean;

// TS交叉类型自动导入  
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & IProps & Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & IProps & Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

// Partial 把这些属性都转换成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Index = (props: ButtonProps) => {
  const { size, type, shape, className, disabled, children, loading, ...restProps } = props;
  // loading等到icon写完之后在处理 并且loading中也预留的delay参数作为辅助
  const [innerLoading, setLoading] = React.useState<Loading>(!!loading);
  const classes = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
  }, className);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (innerLoading) {
      return;
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };
  // React.useEffect(() => setLoading(his => his), [])
  return (<>
    {
      <button
        disabled={disabled}
        className={classes}
        onClick={handleClick}
        {...restProps}
      >
        {children && <span>{children}</span>}
      </button>
    }
  </>)
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;