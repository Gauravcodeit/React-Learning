/* React DOM Manipulation */
const reactElement = React.createElement("h1", {id:"heading", class:"new-heading"}, "Hello world from react")
console.log(reactElement);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
console.log(reactRoot);
reactRoot.render(reactElement)
/* React DOM Manipulation */