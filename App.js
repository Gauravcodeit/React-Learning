import  React  from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
const reactElement = React.createElement("h1", { className: "parent"}, "This is an react elment")

console.log(reactElement);
// root.render(reactElement)
// React Element

// JSX Element
const jsxelment = <h1 className='parent'>this is an jsx element</h1>;
console.log(jsxelment);
root.render(jsxelment);
// JSX Element