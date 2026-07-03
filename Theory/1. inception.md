Chapter 01 - Inception

1. # What is Emmet?
Emmet is a free plugin for text editors which helps to write html and css code faster.
Emmet generates basic code for us , VS code uses Emmet
for ex: if we write 

> html: 5 

the above line will create a basic html code for us 

2. # Difference between a Library and Framework?

Library contains pre defined code (pre written code snippets) that can be used and re used by developer.The library can be pluggeed in into our existing application code and can be used .Javascript contains library i.e; react and jQuery these can be injected into our code and can be used when ever we need, to make application faster and less vulnarable 

Framework provides pre defined structure to application / website

The difference b/w library and famewrok is inversion of control , in library the control will be developer hand , dev decides which code should be called and when and what code should  be used . In framework the control will be in framework, here the framework tell to developer what code should be called/ provided as it requires.

In other ways:
Library means where we can use it in whole app or some part of our app as well ;it may be in root , footer , header where ever we want we can use library.

if our app uses JQuery or something else we can still inject our library in it.

Framework means our whole application will be run in that framework;we have to install all the bundle into our app

3. # What is CDN? Why do we use it?

CDN refers to content delivery network, where the distributed group of servers are strategically placed aroud the world to make websites or applications work faster , it reduces the physical distance to be travelled to get the data. 

4. # Why is React known as React?

React is a JAVASCRIPT libary, the name react is choosen because it is developed to make developers react to the changes made to state and data , this makes application work more faster and with less vulnarabilities. and also to make user interface in a much clearer way.

5. # What is crossorigin in script tag?

Crossorigin attribute is a script tag that provides cross origin resourse sharing (CORS), which allows for loading external javascript files from differnt origin than the hoisting origin . This allows script to access resource from server hoisting the script. such as making http requests or accessing data.

6. # What is diference between React and ReactDOM

React is javascript library which manages components and application state , while ReactDOM is a companion used to render those components to web browser's Document OBject Model,

React specifies with core functionality of react library, all the core code fundamentals will present here and ReactDOM is useful to manipulate DOM operations on HTML

7. # What is difference between react.development.js and react.production.js files via CDN?

The major difference between those lies in lines of code, file size, optimization and debugging technique.
The usage of those files depends on for what we are using those files either to build or lauch.

react.development.js files contains large no.of files , error and warining messages.it is slower and larger bacause it contains extra code to make developers understand and catch error faster.

react.production.js files contains optimised code which is faster and less to make application run faster.

react.development.js is useful for developement purpose, some changes are made we can use development link in production it may cause errors/issues and react.production.js is useful for production , and 

8. # What is async and defer?

async is a keyword used to create asynchronous functions in JAVASCRIPT, it always returns a promise,
if we return a promise it returns it, but if we are not returning a promise then async function will automatically wrap the result in promise and then return it.
and await is only used inside async function before promise to make JS to wait there utill the promise resolves , but here it looks like JS is waiting for promise to resolve but the actual thing is the execution of the function will be suspended the javascipt is not waiting , js waits for none, js is a synchronous single threaded language.

defer is a bollean attribute used in HTML script tags , it tells the browser to download script files in the background without interepting the parsing or build html web page actions . which allows to download in background without blocking/ pausing the HTML






