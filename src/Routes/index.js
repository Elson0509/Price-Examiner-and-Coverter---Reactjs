import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { menuOptionsPrices } from '../services/menuOptions'

//lazy components
const MainLazy = lazy(() => import('../pages/Main'))
const ConvertLazy = lazy(() => import('../pages/Convert'))
const PricesLazy = lazy(() => import('../pages/Prices'))
const UnitsLazy = lazy(() => import('../pages/Units'))
const PricesCompareLazy = lazy(() => import('../pages/PricesCompare'))

const MyRoutes = props => {
    return (
        <Routes>
            <Route exact path='/' element={<MainLazy />} />
            <Route exact path='/convert' element={<ConvertLazy />} />
            <Route exact path='/price' element={<PricesLazy />} />
            <Route exact path='/unit' element={<UnitsLazy />} />
            {
                menuOptionsPrices.map(el=>(
                    <Route exact 
                        key={el.screen} 
                        path={`/price/${el.screen.toLowerCase()}`} 
                        element={<PricesCompareLazy measures={el.measures} title={el.title}/>} 
                    />
                ))
            }
            <Route exact path='/*' element={<Navigate replace to='/' />} />
        </Routes>
    )
}

export default MyRoutes