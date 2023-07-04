import React from 'react'
import Route from './Component/Route';
import Sidebar from './Component/Sidebar';
import AccordionPage from './Page/AccordionPage';
import DropDownPage from './Page/DropDownPage';
import ButtonPage from './Page/ButtonPage';
import ModalPage from './Page/ModalPage';

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
            </div>
        </div>
    )
}

export default App;