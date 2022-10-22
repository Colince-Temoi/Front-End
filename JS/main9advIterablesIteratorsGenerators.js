/* Iterables and Iterators
  ---------------------------
  Iteration in JS.
  ---------------
  =>Before 2015,we had 3 looping constructs: for,while and do..while loops
  =>In the below EX: lets' see how to iterate and access data with a String and Array type using the for loop.
  =>This type of iteration has two difficulties:
    1.To apply some functionality on each element in the String or on each item in the array,We first have to figure out how to access that element.We need to create a new variable i,keep track of it and ensure that it satisfies a condition and finally increament that value of i to access the next element in the collection.If there are nested for loops,we have to do this all over again with a second variable.Like this we have difficulty in accessing the element itself before even getting to the part where we do something with that element.

    2.The second difficulty is with the type of data structure,it is kinda difficult to manage iteration for various types of data structure.You can see that iterating and accessing elements on a string is different from iterating and accesing elements in an array.

    So,there was a need to iterate over various data structures in a new way that abstracts away the complexity of accessing elements one by one and was at the same time uniform across the different data structures.This would make our code more readable and less confusing.That is exactly the reason for introducing iterables and iterators in JS.

    =>Iterables and iterators make it possible to access data from a collection,one at a  time which therefore allows us to focus on what to do with the data rather than how to access the data.
    =>In 2015,two new iteration protocols were introduced which help with iteration.They are the iterable and iterator protocols.
    =>It was also decided some of the data structures would implement the iterable protocol by default.EX's include:
         Strings
         Arrays
         Maps
         Sets
      They are termed as built in iterables, and a new looping construct called: for..of loop was introduced to iterate over an iterable.
  =>Below is an EX of how the for..of loop works with the same String and array.As you can see,we don't really have to worry about accessing elements from the data structure.It is just given to us one by one in a sequence allowing us to focus on the functionality.
  +.Clearly,this is better than creating a variable i,tracking it's value and checking conditions before accessing the next element.

  But what exactly is an iterable??
  ==================================
  =>An object which implements the iterable protocol is called an iterable.But what is the iterable protocol??
  +.Iterable protocol states:
    For an object to be an iterable,it must implement a method at the key[Symbol.iterator]
    That method should not accept any argument and should return an object which conforms to the iterator protocol.But what is the iterator protocol??

    The iterator protocol decides whether an object is an iterator.
    An object is an iterator when it satisfys the following rules:
    1.The object must have a next() method that returns an object with two properties:
           value -->which gives the current element
           done-->which is a boolean value indicating whether or not there are any more elements that could be iterated upon.
=>Now for an example,let's implement our own simple iterable and iterator.
Steps
-----
+. Consider an object which is not a built in iterable.Nothing but create an object literal.
Our goal is to make this object an iterable so that when this object is used with the for..of loop it will print 'hello world',one word at a time.
+.For an object to be an iterable it must implement a method at the key[symbol.iterator] and at this key we must implement a method.
+.The final rule of the iterable protocol is that this method should not accept any argument and should return an object which conforms the iterator protocol.
At the moment we don't know much about what an iterator is, but we do know it is an object that implements the iterator protocol
+.So am gonna create an object called iterator and then return it.
+.So far,that is pretty much,the iterable protocol expressed in code.
+.Next we need to implemnt this iterator.
 Now an iterator is an  object that has a method at the key,next(), the method should return an object which contains two properties: value and done

  Value-->gives the curent element
  done-->Is a boolean value which indicates whether there are more elements to be iterated upon.
+.Currently am not returning the object because this is where we need to come up with our logic.
+.Now within the outer function defined  at the key [symbol.iterator],we declare a variable called step and initialize it to zero.
Within the inner function we increament value of step by one and based on the value of this step variable,we return the appropriate object.
So if step is 1,we return an object where value is going to be the string,'Hello' and done is set to false.
else if step is 2,return a similar object where value is world and done is still false.
+.So, for step 1 and 2 respectively,we return,hello and world and done is set to false in both the steps.
  When step goes beyond 2,we return udefined and done is set to true. We are nothing but saying ,there is no more iteration necessary.
+.So if you now use this object with a for..of loop and run our code.You can clearly see the output is hello then followed by wolrd in the next line.
+.And like this,our object is now an iterable.
+.To be more precise we have now created our very own iterable.

=>Similar to just what we've done here in this example,JS does it internally,for Strings,Arrays, Maps and Sets and that is hw you can easily iterate them with the for..of loop.
=>With this in mind,you now know what are iterables and iterators in JS.

 */
/*  Generators
  --------------
  =>Introduced in 2015, and allows you to define an iterative behaviour by writting a single function whose execution is not continous.
  =>We've just seen hoe to create our very own iterable and iterator,even though it is not dificult to make an iteraror ourselves(Nothing but creating an object with the next method and then defining it's behaviour),It is definately a verbrose implementation.
  =>Wouldn't it be nice if there was something that creates an iterator for us istead of us having to write it,that is where generators come into picture.
  =>Generators are a special class of functions that simplify the task of writting iterators.
  =>Now,there is alot to learn when it comes to generators,but for this course,we are going to focus only on the part where it relates to iterators in JS.
  =>Infact,what we are going to do is re-write this very hello world example using generators.That will allow you to compare and contrast writting our own iterators vs using generators.
  =>So,how can we create a generator??
  =>In JS,we write functions using the function keyword.i.e
  Syntax:
  -------
    function normalFunction(){

    }
  =>Now,a generator since it is a special function,we use the function keyword then followed by an asterisk.I.e
   Syntax:
   -------
   function* generatorFunction(){

   }
  =>But,what is so special about it??
  =>We all know that a normal function follows the run to completion model.
  EX:
  ---
      function normalFunction(){
        console.log('Hello')
        console.log('World')
    }
    This normalFunction What we have here in our example,will not stop before the last line is executed.The function will log to the console: Hello then followed by World
    The only way to exit this function is by returning from it or throwing an error.

=>In contrast,a generator function is a function that can stop midway then continue from where it stopped.Or you could say a generator function is one which could pause it's execution.To achive that behavior, we use the 'yield' keyword.See below example:
  EX:
  ---
      function* generatorFunction(){
        yield 'Hello'
        yield 'World'
    }
yield is an operator,with which a generator can pause itself.
=>Everytime a generator encounters a yield,it yields the value specified after it.We don't say it returns a value,we say it yields a value.
=>Next lets talk about invokation,We invoke a generator function by adding paranthesis after the function name
EX: generatorFunction()
However,unlike returning a value from a normal function, a generator function always returns what we call a generator object.This we can store into some constant.
EX: const generatorObject=generatorFunction()
And this generator object is an iterator.
=>So instead of us having to create an iterator.A generator function will create it for us.And because the generator object is an iterator,it can be used in for..of loops.
So:
for(const word of generatorObject){
  console.log(word)
}
=>Like this,as you can see,with generators,we've not only created an iterable that returns: Hi followed by Colince,but we also now have a simpler way to create iterators.We've achieved the same iteration behavior we had seen in our example on creating our own iterables and iterators,but this time it is much simpler defining our custom iteration behavior

=>Like,this it is obvious from the code,the benefit we get from using generator functions.
 +.First,we don't have to worry about this at the key [Symbol.iterator] function.
 +.Second we don't have to worry about implementing at the key next method.
 +.Third,we don't have to worry about creating the object that is returned from at the key next method.
 +.Finally,we don't have to be responsible for managing the state,In our example on creating our own iterables and iterators,we have a variable,step, that needs to be tracked between iterations.However,we have nothing of the sort in a generator.
 =>So,that is all about generators in JS.
  */
// Iterating and accessing String data using a for loop

// String
const str = "Colince";

// for loop
for (let i = 0; i < str.length; i++) {
  // Iterating through a string you make use of charAt(index) method
  console.log(str.charAt(i)); //logging to the console the String,character by charcter.
}

// Iterating and accessing Array data using for loop

// Array-->Collection of items
const arr = ["C", "o", "l", "i", "n", "c", "e"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //logging to the console the array,item by item
}

// for..of loop  -->iterate over iterables.
// String,Arrays,Maps,Sets are examples of built iterables-->They implement iterable protocol by default.

// Iterating over a string using for..of loop

// String
const str1 = "Sancho";

// for..of loop
for (const char of str1) {
  console.log(char);
}

// Iterating over an Array using for..of loop

// Array
const arr1 = ["S", "a", "n", "c", "h", "o", "7"];
for (const arr of arr1) {
  console.log(arr);
}

// Simple Example on Implementation of iterable and iterator
// Consider the below object which is not a built in iterable
const obj = {
  // for an object to be an iterable,it must implement the method at the key [Symbol.iterator],at this key we must implement a method.See below code.
  // Second and final rule of the iterable protocol,is that this method should not accept any argument and should return an object which conforms to the iterator protocol.
  [Symbol.iterator]: function () {
    // Within this outer function,am declaring a variable called step and initializing it to zero
    let step = 0;

    // At the moment,we don't know much about what an iterator is,but we do know that it is an object that implements the iterator protocol.So am going to create an object called iterator then return it.See below code.
    const iterator = {
      // Now we need to implement this iterator.Now an iterator is an object the has a method at the key next.The method should return an object which returns two properties,value and done.Value gives th ecurrent elemnt and done is a boolean value which indicates whether there are more elements to be iterated upon.See code below:
      next: function () {
        // Within this inner function am increamenting the value of step by one, and based on the value of this step variable,we return the appropriate object,so am going to make use of if..else if conditional statement.
        ++step;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        } else return { value: "undefined", done: true }; //This line implies that there is no more iteration necessary.
      },
    };
    return iterator;
  },
};
// Now lets use for..of loop on the above Implemented iterable and iterator
for (const word of obj) {
  console.log(word);
}

// Generators In Js

// normal function
function normalFunction() {
  console.log("Hello");
  console.log("World");
}
// calling normal function
normalFunction();

// generator function
function* generatorFunction() {
  yield "Hi";
  yield "Colince";
}

// Invokation of generator functions
const generatorObject = generatorFunction();

// Using for..of loop to iterate over generator object
for (const word of generatorObject) {
  console.log(word);
}
