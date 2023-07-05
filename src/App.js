import React from 'react'
import Route from './Component/Route';
import Sidebar from './Component/Sidebar';
import AccordionPage from './Page/AccordionPage';
import DropDownPage from './Page/DropDownPage';
import ButtonPage from './Page/ButtonPage';
import ModalPage from './Page/ModalPage';
import TablePage from './Page/TablePage';
import CounterPage from './Page/CounterPage';

const App = () => {
    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar/>
           <div className='col-span-5'>
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/">
                    <DropDownPage/>
                </Route>
                <Route path="/buttons">
                    <ButtonPage/>
                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage/>
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={10}/>
                </Route>
            </div>
        </div>
    )
}

export default App;