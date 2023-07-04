import React from 'react'
import Route from './Component/Route';
import AccordionPage from './Page/AccordionPage';
import DropDownPage from './Page/DropDownPage';
import ButtonPage from './Page/ButtonPage';
import Sidebar from './Component/Sidebar';

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
            </div>
        </div>
    )
}

export default App;