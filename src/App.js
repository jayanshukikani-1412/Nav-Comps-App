import React from 'react'
// import ButtonPage from './Page/ButtonPage';
import Accordion from './Component/Accordion';

const App = () => {
    const items = [
        {
            id:'ab123',
            label:'Why to use react on a project ?',
            content:"React provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages."
        },
        {
            id:'cd456',
            label:'Why to use javascript on a project ?',
            content:"JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors."
        },
        {
            id:'ef789',
            label:'Why to use python on a project ?',
            content:"Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances."
        }
    ]

    return (
        // <div>
        //     <ButtonPage/>
        // </div>
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default App;