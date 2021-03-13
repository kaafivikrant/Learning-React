//Import the React and React-DOM libraries 
//Import everything which is needed for this exact js file
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
//Function component and Class based component

const App = () =>{
    const buttonText = 'Click Me!';
    return (
        <div> 
            <label className = "label" htmlFor="name"> Enter the name !</label>
            <input id="name" style={{padding: '1px'}} type="text"/>
            <button style={{backgroundColor: 'red', border: '1px solid black'}}>{buttonText}</button>
        </div>
    );
};

//Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);