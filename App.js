/*
<div class="parent">
    <div id="child1">
        <h1>this h1 tag</h1>
        <h2>this h2 tag</h2>
    </div>
    <div id="child12">
        <h1>this h1 tag</h1>
        <h2>this h2 tag</h2>
    </div>
</div>
*/

const reactElement = React.createElement("div", { class: "parent"},
        [
            React.createElement("div", { id: "child1"},
            [
                React.createElement("h1",{},"this h1 tag" ),
                React.createElement("h2",{},"this h2 tag" )
            ]),
            React.createElement("div", { id: "child2"},
            [
                React.createElement("h1",{},"this h1 tag" ),
                React.createElement("h2",{},"this h2 tag" )
            ])

        ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement)

// /* React DOM Manipulation */
// const reactElement = React.createElement("h1", {id:"heading", class:"new-heading"}, "Hello world from react")
// console.log(reactElement);

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// console.log(reactRoot);
// reactRoot.render(reactElement)
// /* React DOM Manipulation */