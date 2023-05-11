import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import { Navbar } from './Navbar/Navbar'
import { Checkout } from './Checkout/Checkout'


export const App = () => {
   return (
     <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
             <Route path='/' element={<ItemListContainer/>}/>
             <Route path='/category/:category' element={<ItemListContainer/>}/>
             <Route path='/product/:id' element={<ItemDetailContainer/>}/>
             <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
     </div>
   )
}
