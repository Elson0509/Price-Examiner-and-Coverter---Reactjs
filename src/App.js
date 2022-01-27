import React, {Suspense} from 'react';
import Routes from './Routes'

function App() {

  return (
    <Suspense fallback='...Loading'>
      <Routes/>
    </Suspense>
  );
}

export default App;
