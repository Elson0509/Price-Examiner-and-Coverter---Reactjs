import React, {Suspense} from 'react';
import Routes from './Routes'
import LoadingSuspense from './components/LoadingSuspense'

function App() {

  return (
    <Suspense fallback={<LoadingSuspense/>}>
      <Routes/>
    </Suspense>
  );
}

export default App;
