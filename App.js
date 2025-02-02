import React from "react";
import { createRoot } from 'react-dom/client';
 
const jsxHeading = <h1>Namaste jsx in React</h1>

const HeaderComponent = () => {
   return <h1>Functional Component</h1>
}
const reactElement = 12345;

const RootComponent = () => (
   <>
      <h2>Component Composition start</h2>
         <HeaderComponent />
         {HeaderComponent()}
         <h2>Adding normal element</h2>
         <h3>{reactElement}</h3>
   </>
)

const root = createRoot(document.getElementById("root"));
root.render(<RootComponent/>);