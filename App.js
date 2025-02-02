import React from "react";
import { createRoot } from 'react-dom/client';

const heading = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"}, 
       [React.createElement("h1",{},"Child1 h1 tah"),  React.createElement("h2",{},"child1 h2 tag")]),
    React.createElement("div",{id:"child2"}, 
       [React.createElement("h1",{},"Child2 h1 tah"),  React.createElement("h2",{},"child2 h2 tag")]),
    ]
);
console.log(heading)

const root = createRoot(document.getElementById("root"));
root.render(heading);