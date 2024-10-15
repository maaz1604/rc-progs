import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function Myapp() {
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click to me visit google",
// };

// const AnotherElement = (
//   <a href="http://facebook.com">Facebook</a>
// )

// const anotherUser = "Coffee and Tea";

// const rctElement = React.createElement(
//   //usually its syntax is predefined 
//   //First it finds any tag
//   'a',
//   //second -> it required an object
//   {
//     href:'https://www.myntra.com',
//     target:'_blanck'
//   },
//   //Third -> it expect direct text
//   'Myntra shopping site',
//   // Finally it takes variables
//   anotherUser
// )

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <App/>
   </StrictMode>
  // rctElement
)
