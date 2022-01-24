import React, {Suspense, lazy} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

//lazy components
const MainLazy = lazy(()=> import ('./pages/Main'))
const ConvertLazy = lazy(()=> import ('./pages/Convert'))
const PricesLazy = lazy(()=> import ('./pages/Prices'))
const UnitsLazy = lazy(()=> import ('./pages/Units'))

function App() {

  return (
    <Suspense fallback='...Loading'>
      <Routes>
        <Route exact path='/' element={<MainLazy/>}/>
        <Route exact path='/convert' element={<ConvertLazy/>}/>
        <Route exact path='/price' element={<PricesLazy/>}/>
        <Route exact path='/unit' element={<UnitsLazy/>}/>
        <Route exact path='/*' element={<Navigate replace to='/'/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
