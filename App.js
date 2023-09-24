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

// JSX Element

const JsxElem = (
    <span>
        New multiline JSx Element
    </span>
)

// Functional Component - Normal Js Functions that return Jsx Element

const ChildReactFuncComponent = () => (
    <div className="child-react-componet" >
       <span>Child Functional Compponent</span>
       {JsxElem}
    </div>
)
const ElementContainReactFunc= (
    <div>
        <ChildReactFuncComponent />
        {ChildReactFuncComponent()}
    </div>
)
const ReactFuncComponent = ()=>{
    return(
        <div>
            <div className="functional-componnet">
                New React Functional Compoent
            </div>
           {ElementContainReactFunc}
        </div>

    )
}

console.clear()
console.log(< ReactFuncComponent />)
root.render(<ReactFuncComponent />);