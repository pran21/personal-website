import React from 'react';

function Hello() {

    const sayHello = () => {
        console.log('Hello');
    }

    return(
        <div>
            <h3>Smaller hello component</h3>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;