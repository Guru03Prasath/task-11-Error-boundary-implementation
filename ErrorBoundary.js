import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import YourComponentTree from './YourComponentTree';

function App() {
  return (
    <ErrorBoundary>
      <YourComponentTree />
    </ErrorBoundary>
  );
}

export default App;