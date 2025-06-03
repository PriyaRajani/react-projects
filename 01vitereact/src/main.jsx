import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const reactElementThird = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click me to visit google'
)
const user ="chai or code"
createRoot(document.getElementById('root')).render(
 
   <App/>
   
  
)
 console.log(anotherElement);
 console.log(reactElementThird);
