/*  JS Pomises
-----------------
=>A promise is a special JS object which is used as a placeholder for the future result of an asynchronous operation.
=>A promise might not return you the data immediately. It will return you the data after sometime, that means in the future.
   Understanding Promise with Real world analogy
   ---------------------------------------------
=>I have an audience requesting me to upload a video on react JS on my Youtube channel.
=>Say,I promised the audience that I will upload a video on react Js on some date.
=>I have also asked them to subscribe to my channel so that whenever I upload a video,they wil get a notification.
=>Here there are two things that can happen,either I will upload the video on the specified date(Fulfilled my promise) and the audience will get an email with the video link Or I will fail to upload the video due to some reason(Rejected the promise/Not able to fulfill my promise) and I that case I will send an email with an apology message.

=>As you can see,In both the cases,the audience is getting a notification/mail.And this is how a promise works in JS.
     Understanding Promise with Technical analogy
     --------------------------------------------
=>I am writting a JS programme from which I want to request data from a datasource.
=>In order to request this data,am going to make use of Promise inside which am going to make an AJAX call to request some data from the data source which can be a Web API,a DB,...etc
=>Here,the DataSource will return us the requested data if everything goes fine.If some issue happened,say network issue or internet connection issue.In that case an error message will be returned by the Data Source,beacuse here,the connection with the data source will fail.
=>Like this,whether the promise is fulfilled or rejected,we will get some result.If promise is fulfilled,then we will get the requested data.If rejected,then we will get some error message.In both cases,result will be passed to the JS programme.

=>Like this,A JS Promise,promises a result. This result can be the data which we have requested if the promise is resolved or the result will be an error message if the promise is rejected.
*/
/*  Creating a Promise-->'new' keyword and Promise() constructor are used.
=> This creates a new promise and returns it,this we can store into a variable.
=>If I save the changes,In the developer console you will see the error:
      Uncaught TypeError: Promise resolver undefined is not a function
    at new Promise (<anonymous>

=>This error is beacuse,Our created promise has no Executer function.
=>Every Promise has an executer function that gets executed immediately when we create a promise.
=>So,inside the paranthesis of the Promise constructor function we can create an anonymous function,just like we create a callback function.To avoid to much stories,just use the VS code auto complete when you type 'new Promise' in you console then press enter.Like this your promise will be ready with the excuter function as an arrow function.Whatever you just have to do is store the promise return value in a variable of your choice.
=>Now,If I save the changes,the error will be gone.
=>An Executer function of a promise gets executed immediately that promise is created.To prove this log a message to the browser console from this Executor function body.
 */
let promise = new Promise((resolve, reject) => {
  console.log(
    "Exector function executed immediately The promise is created,See output on Browser console to verify."
  );
});
/*
=>Initially when a promise is created,it is in pending state.The data returned by the promise in pending state is undefined.
=>To prove this log the above created promise in the browser console.
=>Expand the output on the console to verify this.
*/
console.log(promise);
/*
=>The state of the promise changes to settled when the promise is either resolved or rejected.
=>If the promise is resolved,the it returns the resolved data.Otherwise,If the promise is rejected it returns the rejected data(ie some error message.)
=>To return resolved or rejected data,to this executer function two parameters are required,say resolve and reject.
=>This two parameters,resolve and reject are actually callback functions.
=>To return resolved data from your promise,you can call the resolve callback function from the body of the executer function.Nothing but the first parameter.
=>To return rejected data from your promise,you can call the reject callback function from the body of the executer function.
=>The data you want to return from the promise when it is resolved,you can pass as an argument to the resolve callback function during it's invokation.In our Example below; Am resolving the promise and returning an array of data.Like this the promise state will now to fulfilled and the result will be the array of data.This you can verify from the browser console.
=>The data you want to return from the promise when it is rejected,you can pass as an argument to the reject callback function during it's invokation.You can also reject the promise by invoking the reject() constructor function inside the body of the Executor function and as an argument to the reject() function being invoked,you can pass any data,prefferebly error message.This will be returned by the promise and you can verify this from the browser conole.The status of the promise in this case will change to rejected.The promise result will be the error message.

*/
let promise1 = new Promise((resolve, reject) => {
  console.log(
    "Exector function executed immediately The promise is created,See output on Browser console to verify."
  );
  resolve([20, 36, 16, 50]);
});
console.log(promise1);

/* More practical EX: to seal our better understanding on Promises
=>From the EXecutor function of this promise,lets make an AJAX request to request data from data.txt file I have created in this same Javascript folder.
=>data.txt file contains some text which I want to display on the developer console.
=>So,we are going to make an AJAX call to this data.txt file using XMLHttpRequest object and then we want to display this data in the developer console when the AJAX request is successfully able to get the data but if it is anable to get the data successfully we want to return a rejected data(some error message)
     Steps
     -----
  1.to variable xhr am assigning XMLHttpRequest object which am creating.
  2.create the request.To do this you can use open() method on this xhr object.
  .To this open() method we need to pass 3 parameters.
    +.Since we want to get data from data.txt file,the value to first parameter thus should be GET.
    +.We have to pass the path of the file from where we want to get the data.In our case,we will be using a relative path becaues data.txt file is present in the same folder as or JS file.So we can just use the name of the file,I.E data.txt
    +.As 3rd parameter pass the value as,true because we want to get the data asynchronously
  .Like this we've creted the request.
  3.Send the request.Just use send() method on top of xhr object.
   Like this we have successfully created and send the request.Now we will get a response containing the data which we have requested for,if the path to the file is correct else we will need to return an error message.
=>When the data is completelly loaded,the load event happens and we can handle that load event.
  4.Therefore on this xhr object lets create a property called onload(xhr.onload) because we want to handle this load event here.
  5.To this lets assign an event handler function
=>In this function,if the data is loaded successfully,in that case we want to log that data in the developer console,else if the data is not loaded successfully because of some reason,then we want to return an error message from this promise.
=>Lets say,if and when everything goes fine,then when we send a request and get a response,the response contains a status text,OK.
  +.In the condition space,using xhr.statustext property we can check if it is strictly equivalent to 'OK'
  +.If it is OK,then that means we have successfully recieved the data.
  +.And when we have successfully recieved the data,we want to return that data from this promise.In that case we will say that that promise is resolved.
  +.In this case,invoke the resolve() callback function and as an argument pass the data in the data.txt file,This is present in,xhr.responseText property.
=>Otherwise if an error occurs then in that case the status text will be something different and we will return a rejected data from this promise.In our case,an error message,say:'Something went wrong please try again later'
  
 */
// Producing code-->This is because it is producing some data
let promise2 = new Promise((resolve, reject) => {
  // to variable xhr am assigning XMLHttpRequest object which am creating.
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "data1.txt", true);
  xhr.send();

  // creating a property,xhr.onload and then assigning an event handler function to it.
  xhr.onload = function () {
    if (xhr.statusText === "OK") {
      resolve(xhr.responseText);
    } else {
      reject("Something went wrong please try again later");
    }
  };
});
/*
=>Now,every promise has two important methods: then() and catch() method.
=>then() method is automatically invoked when the promise returns the resolved data.
=>So to this then() method am going to pass a callback function as it's argument.This callback function gets executed when the promise on which we are using this then() method is returning a resolved data and then we can handle that data.
+.In handling this data,let's just say we want to log it in the developer console.
+.But from where do we get this data??
+.This data will be passed as an argument to this callback function by the  promise
+.With this,we are handling the resolved data.
=>If you now save the changes,you can verify from the console that the data which we have in the data.txt file is logged on the console.Like this,we are handling the resolved data using then() method.
=>This promise is returning some data and we are handling that using then() method on this 1st callback function.
=>What if the promise returns a rejected data??Say,I change in my program,data.txt to data1.tx which does not exist in this case.
=>This means when we make an AJAX request,data1.txt will not be found and in that case the status code will not be 'OK',instead it will be 404,because the file will be not found.
=>In that case this if condition will not be executed,else block will be executed and this rejected data will be send.
=>Save the changes and verify this from the developer console.
 +.you will be able to see the error: 404(Not found)
 +.Js will as well log that error saying something went wrong.Please try again later.
 =>Now, here,the error is not handled as we can see it in the developer console.
 =>In order to handle the rejected data,we can pass a second callback function as the argument of the then() method.
 =>Inside this callback function we want to log the rejected data.From where will we get this rejected data??
 =>The rejected data will be passed by the promise as an argument to the second callback function,and using that parameter we can access the data.
 =>The second callback method will be executed when this promise returns the rejected data.
 =>If you save the changes,you can verify from the developer console that this that we have handled the rejected data when the error has been logged to the developer console.
 =>Earlier the error message was displayed by JS,but now we are handling that error and displying this message in the developer console.
 =>Like this,this is one way of handling the rejected data.
 =>Another way,this second argument of then method is optional,way of handling the rejected data is by using catch() method of promise.So on a promise we can also call catch() method.
 =>This catch method takes a callback method as its argument.
 =>Again when the data returned by this promise is rejected data,in that case the callback method of the catch metod will be called and this promise will pass the rejected data to that callback function as it's argument

*/
// consuming code-->Will consume the data produced by this promise.

promise2.then(
  function (data) { 
    //  Inside this function you can write your own logic.
    console.log(data);
  },
  function name(error) {
    //  Inside this function you can write your own logic.
    console.log(error);
  }
);
/*   Summery
------------------
 =>A JS promise,promises a result.
 =>Every promise has an executer function that gets executed immediately we create a promise.
 =>A promise can be:
   +.Resolved: A promise is resolved when the job assigned to that promise is done successfully.
   +.Rejected:A promise is rejected when some error occurs while doing the job.
 =>Initially when a promise is created,it is in pending state.The data returned by the promise in pending state is undefined.
 =>The state of the promise changes to settled when the promise is either resolved or rejected.
 =>If the promise is resolved,then it returns the resolved data.Otherwise,if the promise is rejected it returns the rejected data(i.e some error message).
 =>A promise has a:
  +.producing code:The code which produces the result.The producing code can take some time in producing the result.
  +.Consuming code:The code which consumes the result.Consuming code must wait for the result to arrive.
 =>A promise has two methods:
  +.then
  +.catch
=>The then method takes a callback function as it's parameter which  get's executed when the promise is resolved.It also takes a second optional callback function which gets executed when the promise is rejected.
=>If we only intrested in handling errors,then we can pass null as the first parameter for then method and a second callback function to handle error.
=>Or we can use the catch method to handle the error only.
*/

