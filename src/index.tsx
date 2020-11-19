import React from 'react';
import ReactDOM from 'react-dom';
import Page from './App';

ReactDOM.render(
    <React.Suspense fallback={null}>
      <Page />
    </React.Suspense>
  // </Provider>
  ,
  
  document.getElementById('root')
);