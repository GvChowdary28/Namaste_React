const heading1 = React.createElement(
    "h1",
    {
        id:"title1",
        className: "grand-child",
        title: "grand-child"
    },
    "Namaste React!"
)
const heading2 = React.createElement(
    "h2",
    {
        id:"title2",
        className: "grand-child",
        title: "grand-child"
    },
    "Grand child"
)
const GLwrap = React.createElement(
    "div", 
    {
        id:"title",
        className: "child",
        title: "child"
    }, 
    [heading1, heading2]
);
const container = React.createElement(
    "div",
    {
        id: "container",
        className: "parent",
        title: "parent"
    },
    [GLwrap]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)