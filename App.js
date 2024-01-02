// const heading = document.createElement("h1");

// const root = document.getElementById("root");

// heading.innerHTML="Hello world from js";

// root.appendChild(heading);



const heading = [React.createElement("h1",{},"Hello World From React"),React.createElement("h1",{},"Hello World From React")];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
