/*   Async JS
    ----------
  =>We need to understand the basics of Async programming and why Async JS is important.
  =>Topics to be covered:
           +.Timeouts and intervals
           +.Callbacks
           +.Promises
           +.async await
           +.Event loop
  =>How we will approach the Async Js:
     +.Understand what and why of Async JS
     +.How of Async JS by understanding and solving exercise problems on timeouts,callsbacks,promises and async await.
     +.We will wind up Async Js by understanding how all of them behave with respect to event loop.
    */
/*  Async JS-What and why?
     -------------------------
=>The most important point to understand about JS is that in it's most basic form,JS is a synchrous,blocking,single-threaded language.This three points are very important.Lets understand each of them.

Synchronous
------------
=>If we have two functions which log messages to the console,code executes top down,with only one line executing at any given time.

Blocking
---------
=>JS is blocking which is because of it's synchrous nature.
=>No matter how long a previous process takes,the subsequent process won't kick of until the former is completed.
=>If function A had to execute an intensive chunk of code,JS has to finish that task without moving on to function B.Even if that code takes 10 seconds or 1 minute.
You might have seen this happen in the browser.
=>When web app runs in the browser and it executes an intensive chunk of code without returning control to the browser,the browser can appear to be Frozen.
This is what is called blocking,Browser is blocked from continuing to handle user input and performing other tasks until the web app returns control of the processor.

Single-threaded
----------------
=>JS is single threaded.
=>A thread is simply a process that your JS program can use to run a task
=>Each thread can only do one task at a time.
=>Unlike some other few languages which supports multi-threading and thus can run multiple tasks in parallel.Js has just that one thread called the main thread for executing any code.

=>This brings us back to the point JS in it's most basic form JS is a synchronous,blocking,single-threaded language.

=>As you may have guessed,this model of JS creates a very huge problem.What if we have a task to retrieve data from the DB and then run some code on that data that is retrieved.
 We have to wait on the  first line for the data to be fetched and finally when the data comes back,we can resume with our normal execution.
 +.fetchDataFRomDB(endpoint) only that could take 1s or even  more and during that time we can't run any further code.And if JS simply proceeds to the next line w/out waiting,we have an error because data is not what we expect it to be.
 +.So we need a way to have Asynchronous behavior with JS.
   The question is how do we catter to Asynchronous behavior/Programming in JS???

  Async JS-How?
  -------------
  =>As it turns out,Just JS is not enough to achive that.
  =>We need new pieces which are outside of JS to help us write asynchronous code which is where web browsers come into play.
  =>Web browsers define functions and API's that allow us to register functions that should not be executed synchronously,and should instead be invoked asynchronously when some kind of event occurs.
  =>For,EX: that could be:
  +.the passage of time(setTimeout or setInterval).
  +.The user's interaction with the mouse(addEventListener).
  +.The arrival of data over the network(callbacks,promises,async-await)
  =>This means,you can let your code do several things at the same time without stopping or blocking your main thread

  =>With all this in mind,I hope you now have a fair understanding of what,why and how of Async JS.
=>In the next lecture,let's proceed with the traditional methods JS has for running code Asynchronously,namely timeouts and intervals.
 */
/*  Timeouts and Intervals
    ----------------------
=>In this lecture,let's look at the traditional methods JS has available for running code asynchronously-after a set time period elapsed or at regular intervals of time
=>In other words let's look at the:
    +.setTimeout() function and the
    +.setInterval() function

         +.setTimeout()
         ---------------
=>The setTimeout() function executes a particular block of code ONCE, after a specified time has elapsed.

Syntax: setTimeout(function,duration,param1,param2,...)

=>The first parameter is a function to run,or a reference to a function defined elsewhere.
=>The second parameter is a number representing the duration in millisecond to wait before executing the code.
=>After the second parameter,you can pass in zero or more values that represent any parameters you wan't to pass to the function when it is run.
=>Suppose we have a function greet() which logs 'hello' to the console,we can pass that function/functionName into setTimeout() function as the first parameter,2nd parameter we can specify 2000 Milliseconds which is equivalent to 2 seconds.And like this the text hello will be logged to the screen after 2 seconds.
EX:
---
function greet(){
  console.log('Hello');
}
setTimeout(great,2000)
=>Logs 'Hello' to the console after 2 seconds

=>If the great function was to accept a parameter like we see in the next example:
EX:
---
function greet(name){
  console.log(`Hello $(name)`);
}
setTimeout(great,2000,'Colince')

=>We can happilly pass,to the setTimeout() function the name parameter value as the third argument.
=>After 2 seconds,'Hello Colince' will be logged to the console.
=>Once the setTimeout() has been called,sometimes you may wan't to cancel it.
=>To thus clear a timeout,you can use the clearTimeout() method passing in the identifier returned by the setTimeout as a parameter.
=>In the code snippet below,you can see we assigned the returned value from setTimeout() to a constant called timeoutId.This constant timeoutId,am then passing into the clearTimeout method,which will thus basically ensure our greet() method will not run after the 2 seconds duration.
EX:
---
function greet(name){
  console.log(`Hello $(name)`);
}
const timeoutId=setTimeout(great,2000,'Colince');
clearTimeout(timeoutId);

=>Nothing is logged to the console as the great() function never executes.
=>A more practical scenario is clearing timeouts when the component is unmounting to free up the resources and also prevent code from incorectly executing on an unmounted component.
=>That's all about setTimeout() function,it runs code once after a set period of time.

     setInterval()
     -------------
=>If you have ever wanted to REPEATEDLY run the same piece of code again and again at regular intervals,you can make use of the setInterval() function.
=>Signature remains the same as the setTimeout function.

Syntax:   setInterval(function,duration,param1,param2,...)

=>The first parameter is the code to execute.
=>The second parameter is the duration in milliseconds.
=>After the second parameter,you can pass in zero or more value that represent any parameters you want to pass to the function when it run.
EX:
function great(name){
  console.log(`Hello $name`)
}
setInterval(great,2000,'Colince');
=>great() function is called after every 2 seconds,which logs 'Hello Colince' to the console after every 2 seconds interval
=>Intervals keep running a task forever so you should clear the interval when appropriate.
=>You can do that using the clearInterval() function.So, capture the return value from setInterval() function and pass it in as an argument to clearInterval() function.
 EX:
---
function greet(name){
  console.log(`Hello $(name)`);
}
const intervaltId=setInterval(great,2000,'Colince');
clearInterval(intervalId);

=>And that's pretty much the basics of Timeouts and Intervals
  Noteworthy points
  ----------------
1.Timers and intervals are not features/part of JS itself.They are implemented by the browser/node and setTimeout and setInterval are basically names given to that functionality in JS.
2.The duration parameter is the minimum delay and not guaranteed delay.
EX: If we call setTimeout() with 2 seconds,this is the minimum time after which the passed in function will execute,it could infact take five seconds.
+.JS will only run the function after 2 seconds have ellapsed and the call stack is free.If not the function has to wait before it is executed.
+.So if I specified 0 milliseconds as the duration,It doesn't imply that the function will run immediately.It is the minimum duration after which the function will run.If you are confused about this point,you don't have to worry as we are going to understand this in detail when we talk about event loops,a few lectures down the line.
+.The third important point is about recursive setTimeout Vs setInterval.It is possible to achieve the same effect as setInterval with recursive setTimeout.
EX:
---
setInterval(function run(){
  console.log('Hello')
},100)

setTimeout(function run(){
  conole.log('Hello')
  setTimeout(run,100)
},100)

=>In the above example we have setInterval() with a duration of 100 Milliseconds and we also have above the same functionality with recursive setTimeout()
Basically the run() function keeps calling itself every 100 milliseconds.
=>However there are two differences in this approaches:
1.Incase of recursive setTimeout,the same 100 Milliseconds is guaranteed between executions.The code will log 'Hello' to the console,wait 100 Milliseconds before it runs again.Therefore irrespective of how long the code takes to run,the interval will remain the same.
+.setInterval on the other hand works differently in the sence that the duration inteval includes the time taken to execute the code you want to run.In the 1st case:
If the code takes 40ms to run,the interval is 60ms
Second time:
If the code takes 50ms to run,the interval is 50ms

Typically it shouldn't affect your code too much,but if your code can take longer to run than the time Interval itself,then it is better to go with recursive setTimeout rather than setInterval.This will keep the time intervals constant between executions regardless of how long the code takes to execute and also you won't get any errors.

2.The second difference is that with recursive setTimeout you can actually calculate a different delay before running each iteration.Like this it gives you the flexibility of running the same code over and over with different intervals.
+.setInterval is always a fixed interval duration

Now,that we have a good understanding of setTimeout and setInterval,NEXT,we discuss exercise problems from the interview point of view.

*/
/*     Callbacks
       ---------
=>One important point is,In JS functions are first class objects,what this means is that,just like an object,a function can be passed as an argument to a function and a function can also be returned as values from other functions.
=>Let's understand this with an EX:
//Hi Function which accepts a name parameter.
Function Hi(name){
  console.log(`Hello ${name}`)
}
//HiColince function which accepts another function as an argument
function HiColince(HiFn){
  const name ='Colince'
  HiFn(name)
}
// Invoking HiColince function passing in Hi function name as an argument.
HiColince(Hi)
=>When we call HiColince function,it will execute,inside this we are invoking HiFn which is nothing but Hi function.Hi function will then happilly execute and we will get op: Hi Colince.
=>Any function that is passed as an argument to another function is called a callback function in JS.
=>The function which accepts a function as an argument or returns a function is called a Higher Order Function.

Why Callbacks??
---------------
=>We can answer this by categorizing Callbacks into 2:
   +.Synchronous callbacks
   +.Asynchronous callbacks

Synchronous callback
----------------------
=>A callback function which is executed immediately is called a synchronous callback.
=>In the Example we've just seen previously, Hi function is a Synchronous callback because it execute immediately the control goes into HiColince higher Order function.
=>A more practical Example is a callback function passed to methods like sort, map or filter.In this case the callback function defines the logic that the Higher Order function needs to apply.
=>Like this, nothing too fancy when it comes to synchronous callback

Asynchronous callbacks
-----------------------
=>An asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed.
=>So,in the async world,callbacks are used to delay the execution of a function until a particular time or event has occured.This usecase is really important because most of the applications that we build,usually have some sort of data to be fetched.
=>We all know that data fetching takes time and we can only run the function we want to,after the data has been fetched and not immediately.
=>Let's take a look at few examples on async callbacks which you might already be using without knowing that they are callback functions.The first Ex: is that of setTimeout which we recently learnt.Here:
 +.setTimeout() acts as the Higher Order Function and greet is the callback function.In this case,greet function isn't executing immediately.It waits for some time then executes the greet callback function.This makes it an async callback.
=>Another common usage of async callbacks is event handlers.
 EX:
 function callback(){
  document.getElementById("demo").innerHTML="Hello world"
 }
 document.getElementById("bin").addEventListener("click",callback) //When JS encounters this line,it does not immediately run the callback function.The function is only run when the user clicks on the button.

 =>If you wan't data fetching Example with callbacks,you can go back to jQuerry if you've used it before.
 EX:
 ---
 +.The first parameter is the url
 +.The second parameter is the callback function which gets called only after the data has been loaded.
$.get("url",function(data){
  $(".result").html(data);
  alert("Load was performed.");
})

=>So,this is the role that callbacks play in Async JS.They allow you to delay the execution of a function.
=>Callbacks is something that you are heavily going to see in NodeJS.
=>However,there is a problem with the callbacks pattern.
If you have multiple callback functions where each level depends on the results obtained from the previous level,the nesting of function becomes so deep that the code becomes difficult to read and maintain.
=>In the code snippet below,you can see that each inner function depends on the result obtained from the outer function.So once you go several levels deep,the nesting starts to confuse you.The code is just not intuitive and only gets worse with more and more callback functions as the application grows.
EX:
---
// Callback Hell

fetchCurrentUser(`api/user`,function(result)){
  fetchFollowersByUserId(`api/followers/${resukt.userId}`,function(result){
    fetchFollowerIntrests(`api/intrests/${result.followerId}`,function(result){
      fetchInterestTags(`api/tags/${result.interestedId}`,function(result){
        fetchTagDescription(`api/description/${result.tagId}`,function(result){
          //Finally display the data
        })
      })
    })
  })
})

=>To tackle this problem of callback hell,Promises were introduced in ES6 which we will learn about in the next lecture.

Callbacks summery from an interview point of view
-------------------------------------------------
=>Callbacks are functions passed as arguments to other functions.
=>They can be synchronous if they execute immediately or they can be asynchronous where they get executed after some time has passed,some event has occured or some data has been fetched.
=>Callbacks were the go to pattern for asynchronously running code after fetching some data.
=>As more and more requests had to be made based on the data obtained from the previuos requests,developers started to encounter what is known as the callback Hell.
=>Callback hell makes the code difficult to reason about.
=>An alternative and recommended approach now is to use promises.
*/
/*    Promise
     ---------
=>In atleast 80% of the interviews you will appear for you will be asked about promises.
=>Promise in layman terms-Dinner scenario:
-------------------------------------------
  +.Consider a scenario where you and your roommate want to have dinner at home.
  +.You want to prepare your special soup
  +.At the same time,you feel like having tacos from the food truck nearby.
  +.So you ask your roommate,"Hey can you go down to the food truck and get us some tacos?"
  +.Your friend says,"sure",And when he is about to leave,you tell him,"There is no point in me waiting till you're back to prepare the soup.So i'll start with the soup now but when you reach the place,can you promise that you'll text me so that I can start setting up the dinning table? "
  "Also let me know if something goes wrong.If you can't find the food truck or if they are out of tacos for the night,whatever might be the reason,Just let me know that you can not get the tacos and I'll start cooking some pasta instead"
  +.You friend says"Sure.I promise.I'll head out now and text you in some time"
  +.Now,you go about preparing your soup but the status on tacos?We can say that it is currently pending till you recieve that message from your friend.
  +.When you get back a text message saying that he is getting the tacos,you desire to eat tacos has been fullfilled.You can then proceed to set up the table.
  +.If the text message says that he can't bring back any tacos,your desire to have tacos has been rejected and you now have to cook pasta instead.

=>Now let's pick the important points from the scenario and relate it back to JS and promises.
=>In the scenario,your friend is like a promise in JS.
=>While your friend is on his way to the food truck,you know that it could take a while and you don't want to sit idle.So you start preparing soup in the meantime.This point,Is an analogy to Asynchronous operation in JS(fetchTacos)
=>When your friend text's you with "Can get tacos/can't get tacos",it answers your question on whether he is getting the taco or not.In JS this is the promise return value.
=>If the return value is can get tacos,the promise is said to be fulfilled.
=>If the return value is cannot get tacos for whatever might be the reason,the promise is said to have been rejected.
=>If the promise is fulfilled,you can set up the dinning table.This in JS is a success callback.Or in other words it is the callback function that gets executed when promise resolves successfuly.
=>If the promise is rejected,you can cook some pasta and this is the failure callback.Or in other words it is the callback function that gets executed when the promise failed to resolve and was rejected instead.

=>That pretty much,was a high level overview of what a promise is in JS.

promise-MDN Definition
-----------------------
=>A promise is a proxy for a value not necessarilly known when the promise is created.It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
=>To understand this definition better,let's break it down.
 +.A promise is a proxy for a value-->Going back to our example,your friend made promise that he will let you know whether he can or cannot get tacos,which is the promise value.The promise value is not necessarilly known when the promise is created.Now,EX: you don't know which one of them(can/can't get tacos) is the value when your friend made his promise.He can get tacos or he cannot get tacos.You don't necessarily know that value.
 +A promise allows you to associate handlers with an asynchronous action's eventual success value or failure reason.In our EX, based on the promise value,you could decide ahead of time what has to be done when the promise is eventually fulfilled or rejected.That is either setting up the table or cooking pasta.

 Hopefully the definition makes much more sense now.

What is a Promise?
------------------
 =>Technically,A promise is simply an object in JS.
 =>And a promise is always in one of the three states:
   +.pending: which is initial state,neither fulfilled nor rejected.
   +.Fulfilled:meaning that the operation completed successfully
   +.rejected:meaning that the operation failed.
=>Alright,you should now be having a fair understanding what a promise is in JS.

Why would you use a promise?
----------------------------
=>Well,for one and only one purspose.Promises help us deal with asynchronous code in a far more simpler way compared to callbacks.Remember the callback hell we spoke about in the privious lecture??,well,that can be avoided with promises and the code can be sort of read in a simple synchronous way.

How to work with promises in JS?
---------------------------------
=>If you go back to our Dinner Scenario EX:
+.You have your friend as an analogy for a promise
+.You have can get tacos/Cannot get tacos which is the promise value that your friend should inform you about.
+.If he can get tacos,He is fulfilling his promise.
+.If he cannot get tacos,he is rejecting his promise.
  We have the success callback and the failure callback that we need to attach to the result returned by the promise.
+.You Setting up the table is the Success callback
+.You cooking pasta is the failure callback.

=>The above six points cover the necessary information about a promise.
=>Now,we need to understand 3 things in code.
   +.How to create a promise?-->Which covers point number 1.
   +.How to fulfill or reject the promise?-->Which covers points 2,3 and 4
   +.How to execute callback functions based on whether the promise is fulfilled or rejected,which covers points 5 and 6.

How to create a promise?
-------------------------
=>We create an instance of a promise using the new keyword with the promise constructor function.
 Syntax:
 ------
 const promise=new promise()

 How to fulfill or reject the promise?
 -------------------------------------
 =>It turns out,the promise constructor function accepts one function as it's argument.Let's pass in an arrow function.
 EX:
 ---
 const promise=new promise(()=>{

 })
 =>This arrow function,automatically recievs two arguments:
   +.resolve
   +.reject
  Here,both resolve and reject arguments are both functions
  EX:
  ---
   const promise=new promise((resolve,reject)=>{

 })
 =>Resolve is a function,which when called changes the status of the promise from pending to fulfilled.
 EX:
 ---
 const promise=new promise((resolve,reject)=>{
  // when called changes the status of the promise from pending to fulfilled.
  resolve()
 })

 =>Reject is a function,which when called changes the status of the promise to rejected.
  EX:
 ---
 const promise=new promise((resolve,reject)=>{
// when called changes the status of the promise to rejected.
  reject()
 })

 This is very important to keep in mind as you cannot directly mutate the status of a promise.You can call the resolve function to fulfill the promise or the reject function to reject the promise.
 =>Typically,both this functions are called after an async operation.
 =>To keep things simple,let's use setTimeout
 =>We are going to assume,for you friend to go out and text you back,it takes 5 seconds.That's why our code changes to incorporate the setTimeout as below.
 =>If the food truck was found,we will call resolve after 5 seconds.
 =>If the food truck was not found,we call reject after 5 seconds.
 EX:
 ---
 const promise=new promise((resolve,reject)=>{
  setTimeout(()=>{
    // food truck found.
    // Changes status from 'pending' to 'fulfilled'
    resolve('Bringing Tacos')
  },5000)
 })

 EX:
 ---
 const promise=new promise((resolve,reject)=>{
  setTimeout(()=>{
    // food truck not found.
    // Changes status from 'pending' to 'rejected'
    reject('Not Bringing Tacos.Food Truck not there')
  },5000)
 })
=>This is how you pretty much fulfill ar reject a promise.

=>The final part is to understand how to execute callback functions based on the status change of the promise.

How to execute callback functions based on the status change of the promise?
----------------------------------------------------------------------------
=>Let's define 2 callback functions.
  +.On fulfillment is a function to be called if resolve is called after Async operation.
  +.On rejection is a function to be called if reject is called after Async operation.
  EX:
  ---
  const onFulfillment=(result)=>{
    // resolve was called
    console.log(result)
    console.log(`Set up the table to eat tacos`)
  }

  const onRejection=(error)=>{
    // Reject was called
    console.log(error)
    console.log(`Start cooking pasta`)
  }
=>Going back to our analogy,if the food truck was found,our promise is fulfilled,in which case you wan't to set up the table to eat tacos
If the food truck was not found and our promise is rejected,we have to start cooking the pasta.
I have demonstrated those two actions using log stmts,Ideally there will be more code in you callback functions to get our requirements done.
=>Now,I keep telling you that we are defining callback functions,but callback functions are functions that are passed in as arguments to other functions,right? Hahaah,but well,where are those other functions.This is the point where the promise we've created comes into picture.
EX:
---
// Resolve scenario
const promise=new promise((resolve,reject)=>{
  setTimeout(()=>{
    // Food truck found
    // Change the status from 'pending' to 'fulfilled'
    resolve('Bringing Tacos')
  },5000)
})
// Reject scenario
const promise=new promise((resolve,reject)=>{
  setTimeout(()=>{
    // food truck not found
    // Change status from 'pending' to 'rejected'
    reject('Not Bringing tacos.Food Truck not there')
  },5000)
})

promise.then()
promise.catch()

=>When we create a new promise using the promise constructor function,The promise object gives us access to 2 methods/functions:
  1.then() method
  2.catch() method
=>We call those methods using promise.then() or promise.catch()
=>The important bit is:
  +.If the status of the promise changes from pending to fulfilled by calling the resolve function,the function that is passed to then() function will automatically be invoked.
  +.If the staus of the promise changes from pending to rejected by calling the reject function,the function that is passed to catch() function will automatically get invoked
=>In our case we need to pass, onFulfillment function to then() function and onRejection function to catch() function.I.E:
    promise.then(onFulfillment)
    promise.catch(onRejection)
=>Since the 2 functions are passed in as arguments to other functions,they are callback functions
=>A promise code works as expected but there is room for improvement.
  +.What if you wan't to send out some data when resolving or rejecting a promise? That way inside our callback functions,we can make use of the value to do something else.It turns out,we can pass a value to resolve our reject.In the example below,in the resolve() function am passing a String.'Bringing tacos'  and in the reject() function am passing a String,'Not bringing tacos,Food truck not there'
  
  But how do we access this Strings in our Callback functions?? Well,the great thing abut a promise is that,it will automatically inject the argument passed to resolve()function-Nothing but the String in this case-as the argument on the onfulfillment callback function and the  argument pased to reject() function-Nothing but the String in this case-as argument on the onRejection callback.You can clearly See that I have included parameters on both those callback function and logging that on the console.
  
  =>Like this we will be seeing the output below when the promise is fulfilled:
  'Bringing Tacos'
  'Set up the table to eat tacos'
  =>If there is an error and hence a rejection,we will see the below output on the screen:
  'Cannot bring tacos'
  'Start cooking pasta'
  =>Of course in a practical scenario your result will be an object or an array or any datatype that you async operation returns.The error might be an object with different error codes and in your own rejection callback handler,you might want to perform different actions based on the error status code.
  =>With this pretty much is the fundamentals of promises in JS.

  Summary for interview
  ---------------------
  =>Begin by Explaining what is a promise.You don't have to give the technical definition from MDN.It is probablly better to explain in your own words.
  =>Talk about how Promises are used for async operations in JS Giving an analogy to a real world scenario and connecting it back to JS.
  =>Talk about the three states that a promise can be in namely pending,fulfilled and rejected.
  =>Talk about the function which is passed into the promise constructor function.
  =>Talk about the resolve and reject fuctions and how they change the state of the promise from pending to fulfilled or pending to rejected.
  =>Finally, talk about the onFulfillment and onRejection callback functions which let you decide what to run when a promise is fulfilled or rejected.
   
  If you are applying for a Junior dev role,for the most part,this should give the interviewer a good impression on your knowledge about promises.However their are a few more details for us to understand,we will do that in the next lecture which is Part 2 of promise.

      Promise-Part 2
      -------------
=>Previously we learn't about the fundamentals of promises in JS.We learnt:
  +.How to create a promise.
  +.How to change it's state using the resolve and reject functions.
  +.How to attach callbacks using then an catch functions on the promise object.
=>In this lecture let's understand a few more points on the concept of promises which are useful during an interview.

    1.then() function
    ------------------
=>At the moment we passed in,the onFulfillment callback function to then() function as an argument and onRejection callback function to catch() function as an argument.
  EX:
  ---
  const promise=new promise((resolve,reject)=>{
    resolve() or reject()
  })
  promise.then(onFulfillment)
  promise.then(onRejection)
=>But you could if you want to,pass onRejection callback function as the second argument to then() function.The code works,exactly as before.
   promise.then(onFulfillment,onRejection)
=>However,the usage of catch() function is encouraged because of one reason,In the 2 arguments approach through then() function,The onRejection callback function handles errors from only the promise.However,if your callback function itself throws an error or an exeception,there is no code to handles that.
=>If you have a catch function though,even if your onFulfillment callback function throws an Exception,It is still caught and then you can handle that exception gracefully.
=>So, do make a note that then() function can accept both success and Error callbacks but is not preffered over using catch function.


    2.chaining promises
    --------------------
=>Lets move on to the second point for this lecture which is about Chaining promises.At the moment a promise is returned using the new keyword followed by the promise constructor function.But let me tell you that both then() and catch() functions return promises.This means that then() and catch() methods can be chained in JS.
=>The two lines below:
promise.then(onFulfillment)
promise.catch(onRejection)

This two lines can be re-written as:

 promise.then(onFulfillment).catch(onRejection)

=>This chaining can be done as many times as you want to which also solves the problem of callback hell we encountered a ew lectures back.

So, the code with callbacks looked like below:
EX:
---
// Callback Hell

fetchCurrentUser(`api/user`,function(result)){
  fetchFollowersByUserId(`api/followers/${resukt.userId}`,function(result){
    fetchFollowerIntrests(`api/intrests/${result.followerId}`,function(result){
      fetchInterestTags(`api/tags/${result.interestedId}`,function(result){
        fetchTagDescription(`api/description/${result.tagId}`,function(result){
          //Finally display the data
        })
      })
    })
  })
})
=>The same code with promises looks like below:
EX:
---
// Solivng the callback hell using Promise
const promise=fetchCurrentUser(`api/user`)
promise
    .then(result=>fetchFollowersByUserId(`api/followers/${result.userId}`))
    .then(result=>fetchFollowesInterests(`api/interests/${result.followerId}`))
    .then(result=>fetchInterestTags(`api/tags/${result.interestId}`))
    .then(result=>fetchTagDescription(`api/description/${result.tagId}`))
    .then(result=>console.log('Display the data',result))

=>As you can see the code becomes much more readable and maintainable,Infact it seems as if the code is synchronous.
 We begin by fetching the Current user,then followers,then intrests,then tags,then the description and then finally display the data.
=>This is really important to keep in mind,not only from an interview point of view but also for your day to day work.
=>Promises can be chained.
=>The last point to discuss when it comes to promises for an interview is some of the static methods available with a promise.
      3.Promise-Static methods
      ------------------------
They include:
    3.1 Promise.all() method
        ---------------------
=>Many at times you may wan't to querry multiple API's and perform some actions but only after all the APIs have finished loading.
=>For such scenario you can use Promise.all()
=>Below is an EX: from MDN docs to help you better understand this method.
   EX:
   --
   const promise1=promise.resolve(3);
   const promise2=42;
   const promise3=new promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
   });
   Promise.all([promise1,promise2,promise3]).then((values)={
    console.log(values);
   });
  //  Expected output: Array [3,42,'foo']
  =>From the example above,first promise immediately resolves.
  =>The second isn't really a promise
  =>The third resolves after 100ms
  =>You can pass in all the three promises as an array to Promise.all() method,and you see the output as an array containing the results of the individual promises.However keep in mind even if one of the promise rejects,Promise.all() method will reject with that error message.
  =>The above EX: can thus be summerised into the following points:
   +.The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input promises.
   +.The returned promise will resolve when all the input's promises have resolved,or if the input iterable contains no promises.
   +.It rejects immediately if any of the input promises reject or the non-promises throw an error,and will reject with this first rejection message/error
=>This is all about Promise.all() method.

   3.2 Promise.allSettled() method
  --------------------------------
=>Is a slight variation of Promise.all() method
=>It waits for all input promises to complete regardless of whether or not one of them is rejected.
=>Promise.all() method returns even if one promise rejects whereas Promise.allSettled() method returns after all promises have completed,even if one or more promises rejects.
   EX:
   --
   const promise1=promise.resolve(3);
   const promise2=42;
   const promise3=new promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
   });
   Promise.allSettled([promise1,promise2,promise3]).then((values)={
    console.log(values);
   });
  //  Expected output: Array [3,42,'foo']
    3.3 Promise.race()
    ------------------
=>This methods returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects,with the value or reason from that promise.
  EX:
  --
  const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'one');
  });
  const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'Two');
  });

  Promise.race([promise1,promise2]).then((value)=>{
    console.log(value);
    // Both resolve,but promise2 is faster
  });
  // Expected output: 'two'
=>In the EX: we have here,even though both promises resolve,Promise2 resolves in 100ms, whereas promise1 resolves in 500ms.So,the value resolved from promise2 is the value Promise.race() will get,which is logged to the console as above.The output is the String 'two' that you can see above.
=>So,Promise.all(),Promise.allSettled() and promise.race() are some of the static methods you need to keep in mind for an interview.
=>With that we come to the end of the discussion about promises in JS.

=>In the next lecture let's see how asynchronous code can be futher improved with async-await.
 */
// setTimeout function

function greet(name) {
  console.log(`Hello ${name}`);
}
setTimeout(greet, 5000, "Colince");

// This function will never execute
function greet1(name) {
  console.log(`Hello ${name}`);
}
const timeoutidentifier = setTimeout(greet1, 5000, "TMI");
clearTimeout(timeoutidentifier);

// setInterval function

function greet2(name) {
  console.log(`Hello ${name}`);
}
clearInterval(setInterval(greet2, 3000, "Sancho7"));

// Recursive setTimeout() vs setInterval functions

// Recursive setTimeout
clearTimeout(
  setTimeout(
    function greet3(name) {
      console.log(`Hi ${name}`);
      setTimeout(greet3, 10000, "Antony");
    },
    10000,
    "Antony"
  )
);

// setInterval function
clearInterval(
  setInterval(
    function run(age) {
      console.log(`I'm ${age} years old`);
    },
    10000,
    22
  )
);

// Callback Function
function Hi(name) {
  console.log(`Hi ${name}`);
}
// Higher OrderFunction
function HiColince(Hifn) {
  const name = "Colince";
  Hifn(name);
}
// invoking HiColince Higher Order function
HiColince(Hi); //Passing Hi function as argument to HiColince function

// Arrow functions-->Offer a more coincise way of writting functions

// Normal function
function add(a, b) {
  return a + b;
}
const addition = add(20, 20);
console.log(addition);

// Arrow function
const arrowSum = (a, b) => a + b;

const addition1 = arrowSum(30, 20);
console.log(addition1);

// Ex: on Synchronous callbacks
let numbers = [1, 2, 3, 5, 6, 7, 8];
numbers.sort((a, b) => a - b);
numbers.map((n) => n * 2);
numbers.filter((n) => n % 2 === 0);

// JS Promise

/* 1.Creating an instance of a promise
----------------------------------------
=>resolve-->Is a function,when called changes the status of the promise from 'pending' to fulfilled
=>reject-->Is a function,when called changes the status of the promise from 'pending' to rejected
 2. how you fulfill or reject a promise.
 ---------------------------------------
=>Both this functions are typically called after an Async operation.To keep things simple am using setTimeout.
=>We are assuming for your friend to go out and text you back takes 5 seconds.This is why our code changes to incorporate setTimeout.
=>If food truck is found,we call resolve() function after 5 seconds.
=>If food truck is not found,we call reject() function after 5 seconds.
=>Upto here,this is pretty much how you fulfill or reject a promise.

3.  How to execute callback functions based on the status change of the promise.
--------------------------------------------------------------------------------
=>Define 2 functions,onFulfillment and  onRejection.
=>onFulfillment() is the function to be called if resolve() is called after the Async operation.
=>onRejection() is the function to be called if reject() is called after the Async operation.

=>When we create a new promise using the promise constructor function,The promise object gives us access to two methods: then() and catch().
     Important points
     -----------------
=>If the status of the promise changes from pending to fulfilled by calling the resolve() function,the callback function that is passed to then() function will automatically get invoked.
=>If the status of the promise changes from pending to rejected by calling the reject() function,the callback function that is passed to catch() function will automatically get invoked.
=>In our case we are passing onFulfillment() function to then() and onRection() function to catch().
=>A promise code works as expected but thier is room for improvement.What if you want to send out some data while resolving or rejecting a promise??
=>That way inside our callback functions,we can make use of the value to do something else.
=>It turns out we can do that by passing an argument to resolve() method or reject() method..This argument could be anything,from simple datatype value to even complex datatype values such as object or even arrays,name them....
=>For this Example,am just passing String as our argument to resolve() and reject() methods.
=>But how do we access this arguments in our callback functions??
=>Well,the great thing about a promise is that,it will automatically inject the argument passed to resolve() as the argument to onFulfillment callback and the argument passed to reject as the argument to onRejection() callback.
=>You can see that I've included parameters to both this callbacks,and simply logging the arguments stored in them.
=>If you run the code,you will see the output:
    'Bringing tacos'
    'Set up the table to eat tacos'
---------------------------------------------
    'Cannot bring tacos'
    'Start cooking pasta'
=>In a practical scenario,result parameter will recieve an argument,say an array,object or any Datatype that you async operation returns.
=>The error parameter might be an object with different error codes and in your own rejection callback handler you might want to perform different actions based on the error status code.
=>With this pretty much is the fundamentals of promises in JS.
*/
// Resolve Scenario
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Calling resolve function after an Async operation
    // food truck found
    resolve("Bringing Tacos");
  }, 5000);
});

// Reject scenario
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Calling reject function after an Async operation
    // food truck not found
    reject("Not bringing tacos,food truck not there");
  }, 5000);
});

// onFulfillment() fucntion-->to be called if resolve() is called after the Async operation.
const onFulfillment = (result) => {
  // resolve() was called
  console.log(result);
  console.log("Set up the table to eat tacos");
};
// onRejection() fucntion-->to be called if reject() is called after the Async operation.
const onRejection = (error) => {
  // reject() was called
  console.log(error);
  console.log("Start cooking pasta");
};

// Calling the two methods given to us when we create a promise using the promise constructor function.
promise.then(onFulfillment);
promise1.catch(onRejection);
