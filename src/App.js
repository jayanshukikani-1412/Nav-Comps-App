import React from 'react'
import Button from './Button';
import { GoBellFill, GoCodeOfConduct,GoCheckCircleFill } from "react-icons/go";
const App = () => {
    const handleClick = () => {
        console.log("BUTTON IS CLICKED...")
    }
    const handleMouseOver = () => {
        console.log("BUTTON IS HOVER...")
    }

    return (
        <div>
            <div>
                <Button success rounded outline onClick={handleClick} className="mb-10">
                    <GoBellFill />
                    Click Here
                </Button>
            </div>
            <div>
                <Button warning onMouseOver={handleMouseOver}>
                    <GoCodeOfConduct />
                    Hello
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Good Morning
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    How are you ?
                </Button>
            </div>
            <div>
                <Button danger>
                <GoCheckCircleFill />
                    I am fine.
                </Button>
            </div>
        </div>
    )
}

export default App;
