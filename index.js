// Hello world program in JS
console.log("Hello World!")
const h11 = document.createElement("h1");
h11.innerHTML = "Hello from JS";

const r1 = document.getElementById("root");
r1.appendChild(h11);

//CDN links 

// <!-- 
//     <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -->

//Hello world program in React

const heading = React.createElement("h1",{id:"heading1", xyz:"abc", className:"1stclass"},"Hello from React ___Heyyy my 1st react code hurrrayyyy..!!");
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(heading);

console.log(heading); // it will return object 


const parent = React.createElement("div",{id:"parent"}, 
                                    [React.createElement("div",{id:"Child1"}, 
                                                [React.createElement("h1",{},"Iam H1 from nested react child1"),
                                                    React.createElement("h2",{},"Iam H2 from nested react child1")]
                                   ),
                                   React.createElement("div",{id:"Child2"}, 
                                                [React.createElement("h1",{},"Iam H1 from nested react child1"),
                                                    React.createElement("h2",{},"Iam H2 from nested react child1")]
                                   )]
                                      

)

const r2 = ReactDOM.createRoot(document.getElementById("heading"))

console.log("I have nested tags inside me", parent);

r2.render(parent);



//creating react_element using JSX

const jsx_ele = <h1 id="heading" className="head" tabIndex="1">My 1st JSX CODe</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx_ele);


// React Component

const Head = () => {
    return <h1 id="Head1" className="react_functional_component">Hello Iam functional component of React</h1>
}

const Head2 = () => (
    <div id="container">
        <Head />  
        <h1 className="h1tag">Hey there</h1>
    </div>
)

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Head2 />);