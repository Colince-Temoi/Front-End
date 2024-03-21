console.log('Changes inside analytics');
/* If you hover over the button you will notice its union types
The ? before adding the event listener is used to avoid the null option by informing the TS compiler that the button will never be null.
If you remove it problems will start.
You can also remove it anyway and add ! as shown in the commented code below.
It will be communicating the same information as ? was doing
*/
// const button = document.querySelector("button")!;
const button = document.querySelector("button");

button?.addEventListener('click',()=>{
  console.log("Button clicked");
})
// Maps, Sets, WeakMaps,WeakSets, ReflectApi's, Proxies, ...etc are all ES6 features
/*
They will be supported in this TS file because in tsconfig.json file under compilerOptions on the key target we have specified es2016
If we specify es5 for the target, then the es6 features won't work here.
*/
//
let map = new Map();
