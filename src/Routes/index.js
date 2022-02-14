import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { menuOptionsPrices, menuOptionsMeasure } from '../services/menuOptions'

//lazy components
//const MainLazy = lazy(() => import('../pages/Main'))
const ConvertLazy = lazy(() => import('../pages/Convert'))
const PricesLazy = lazy(() => import('../pages/Prices'))
const QuantityLazy = lazy(() => import('../pages/Quantity'))
const PricesCompareLazy = lazy(() => import('../pages/PricesCompare'))
const ConversorLazy = lazy(() => import('../pages/Conversor'))

const MyRoutes = _ => {
    return (
        <Routes>
            {/* <Route exact path='/' element={<MainLazy />} /> */}
            <Route exact path='/convert' element={<ConvertLazy />} />
            <Route exact path='/price' element={<PricesLazy />} />
            {
                menuOptionsPrices.map(el=>(
                    el.screen === 'Quantity' ?
                    <Route exact 
                        key={el.screen} 
                        path={`/price/${el.screen.toLowerCase()}`} 
                        element={<QuantityLazy measures={el.measures} title={el.title}/>} 
                    />
                    :
                    <Route exact 
                        key={el.screen} 
                        path={`/price/${el.screen.toLowerCase()}`} 
                        element={<PricesCompareLazy measures={el.measures} title={el.title}/>} 
                    />
                ))
            }
            {
                menuOptionsMeasure.map(el=>(
                    <Route exact
                        key={el.screen} 
                        path={`/convert/${el.screen.toLowerCase()}`} 
                        element={<ConversorLazy measures={el.measures} title={el.title}/>} 
                    />
                ))
            }
            <Route exact path='/*' element={<Navigate replace to='/convert' />} />
        </Routes>
    )
}

export default MyRoutes