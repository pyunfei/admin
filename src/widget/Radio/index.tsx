import React from 'react';
import classNames from 'classnames';
import './index.css';

interface IProps extends
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onClick'> {
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (status: boolean) => void;
}
// 模式待用
export type mode = 'primary' | 'danger' | 'success' | 'normal';

const Index = (props: IProps) => {
  const { checked, disabled, children, onClick } = props;
  const [check, setCheck] = React.useState<boolean>(checked as boolean);

  const handleClick = () => {
    if (disabled) return;
    setCheck(his => !his);
    if (onClick) {
      onClick(!check as boolean)
    };
  }

  const classes = classNames('check-node', {
    [`check-node-disabled`]: disabled,
  });
  const svg = classNames('check-inner', {
    [`check-inner-check`]: check,
    [`check-inner-disabled`]: disabled,
  })

  return <>
    <span
      className={classes}
      onClick={() => handleClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={svg}
      >
        {check && !disabled && <circle cx="50" cy="50" r="30"></circle>}
      </svg>
    </span>
    {children && <span className="check-value">{children}</span>}
  </>
};

Index.propTypes = {};
Index.defaultProps = {
  checked: true,
  disabled: false
}

export default Index;