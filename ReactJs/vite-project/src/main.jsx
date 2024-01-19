import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx } from 'react/jsx-runtime.js'

function MyApp() {
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherUser = "Samsung"

const reactElement = React.createElement(
    'a',   // Type
    // Porperties
    {
        href: "https://google.com", target: "_blank"
    },
    // That you want to print in the display
    'Click me to bisit Google', 
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
