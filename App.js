import React from "react";
import ReactDOM from "react-dom/client";

//Using React Element
const nestedHeader = React.createElement("div", { class: "title" }, [
  React.createElement("h1", { id: "heading1" }, "I'm h1"),
  React.createElement("h1", { id: "heading1" }, "I'm h2"),
  React.createElement("h1", { id: "heading1" }, "I'm h3"),
]);

//Using JSX
const nestedHeader1 = (
  <div className="title">
    <h1 className="heading1" tabIndex="2">
      I'm h1 using JSX
    </h1>
    <h1 className="heading1" tabIndex="2">
      I'm h2 using JSX
    </h1>
    <h1 className="heading1" tabIndex="2">
      I'm h3 using JSX
    </h1>
  </div>
);

//Using Functional Component
const NestedHeader2 = () => (
  <div className="title">
    <h1 className="heading1">I'm h1 using Component</h1>
    <h1 className="heading1">I'm h2 using Component</h1>
    <h1 className="heading1">I'm h3 using Component</h1>
  </div>
);

//Component Composition
const TitleComponent = () => {
  return (
    <div id="container">
      <h1 id="heading">I'm from component Composition</h1>
      {NestedHeader2()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
