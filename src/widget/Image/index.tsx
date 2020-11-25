import React from 'react';
import { createPortal } from 'react-dom'
import Icon from './edit';
import styles from './index.module.less';

interface ImageProps extends
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholderMap' | 'onClick'> {
  src?: string | '';
  width?: number;
  height?: number;
  fallback?: string;
  preview?: boolean;
  placeholderMap?: boolean | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export type ImageStatus = 'normal' | 'error' | 'loading' | '';

const Index = (props: ImageProps) => {
  const { width, height, src, fallback, preview, placeholderMap, onClick, ...restProps } = props;
  const [show, setShow] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<ImageStatus>('');


  const closePreview = () => setShow(false);
  const showPreview: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShow(true);
    if (onClick) onClick(e);
  };

  const onError = () => setStatus('error');
  const onLoad = () => setStatus('normal');

  // React.useEffect(() => { setStatus(status) },[status]);

  return (<>
    <div
      style={{ width, height }}
      className={styles.container}
      onClick={(preview && status !== 'error') ? showPreview : onClick}
    >
      {
        status === 'error' && fallback ? <img alt="" src={fallback} /> : <img
          alt=""
          src={src}
          onError={onError}
          onLoad={onLoad}
          {...restProps}
        />
      }

    </div>
    {(status === 'normal' && show) ? createPortal(<div>
      <Icon closePreview={closePreview} sources={src!} />
    </div>, document.body) : null}
  </>)
};

Index.propTypes = {};
Index.defaultProps = {
  width: 200,
  height: 200,
  preview: true,
};

export default Index;