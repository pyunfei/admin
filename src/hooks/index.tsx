import React from 'react';

const Index = () => {
  const currentRef = React.useRef<Record<React.Key, React.ReactElement>>({});
  const div = <div>notify</div>
  currentRef.current['0'] = div;
  console.log(currentRef);
};

export default Index;