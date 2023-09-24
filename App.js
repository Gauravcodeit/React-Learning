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
    <div>
        New multiline JSx Element
    </div>
)

// Functional Component - Normal Js Functions that return Jsx Element

const ChildReactFuncComponent = () => (
    <div className="child-react-componet" >
        Child Functional Compponent
    </div>
)
const ReactFuncComponent = ()=>{
    return(
        <div>
            <div className="functional-componnet">
                New React Functional Compoent
            </div>
            < ChildReactFuncComponent />
        </div>

    )

}

console.clear()
console.log(< ReactFuncComponent />)
root.render(<ReactFuncComponent />);