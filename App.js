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