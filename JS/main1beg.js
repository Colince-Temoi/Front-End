/*TYPE CONVERSION
 -----------------
 =>We will learn how to convert one type into another because alot of times the  code you write has to do some kind of conversion
 =>2 types:
   1.Implicit conversion/coercion
    -----------------------------
    Where JS itself will automatically convert the type.
    EX:
        ADDITION OPERATOR AS BELOW
        -------------------------------
     number + Numericstring =String  I.E 3 + '2'=32
     boolean + Numericstring = String I.E true + '4' =true4

      ANY OTHER ARITHMETIC OPERATOR - / * 
      -----------------------------------------
    number - Numericstring = number  I.E 4-'2'=2
    numericString * numericString =number I.E '4' * '2' = 8
       In this case, the numeric string operands will be converted to number.

NOTE: If you try to use nonnumeric strings with other arithmetic operators(- / *),the result will be a special value called: NaN -->Not A Number
   EX: 'Colince' - 'tmi'  //o/p NaN

NumericString and bolean as operands for other operators(- / *)
    false will be tiggered as 0
    true will be triggered as 1
EX: '5' -true = 4
   '5'- false =5

The final example under implicit conversion is that of undefined.
       If you use undifined and number or boolean or null as operands ,the result is NaN

As you can see JS automatically converts types when perfoming operations and it crucial to understand this COERCION/Implicit conversion to avoid any confusion in you code.

  2.Explicit conversion
  ----------------------
  Where you manually convert the type.We are going to rely on some of the built-in methods available in JS.

       Convert NumericString or boolean to numeric types
       --------------------------------------------------
We can use:
   1.Number() global method.
        EX: Number('5') //5
            Number(false) //0
    An empty string will also return zero. Number('') //0
  2.parseInt() method  -->Converts to integer.
     EX: parseInt('5') //5
  3.parseFloat() method -->Converts to float
     EX: parseFloat('3.14')//3.14

      Convert Other Datatypes to String
      ----------------------------------
  1.String() global method.
       EX: String(500) //will return the string 500
           String(true) //will return the string true
           String(null) //will return the string null
           String(undefined) //will return the string undefined.
  2.toString() -->You can use it as an alternative to String() global method.
       EX: (500).toString()  -->The datatype you are converting to String need to be in paranthesis.

toString() method however will not work on null and undefined.

      Convert Other Datatypes to boolean
      ----------------------------------
    1.Boolean() global method.
      EX:Boolean(10) //true
  NB: null undefined, Numeric Zero-->(0), emptystring-->('')and NaN , all return false when converted to a boolean.Everything else will return true including string with only spaces as its value -->('    ')

 */
/*EQUALITY
 ==  -->Allows coercion/Implicit conversion when the types on the LHS AND RHS are different.
 === -->Does not Allow coercion/Implict conversion when the types on the LHS AND RHS are different.

  
 */
// numericstring operand  +  any datatype = String
console.log(true + "1");
console.log("Colince" + "1");

//numericString and number as operands for the operators - / * will result in the numericstring operands being implicitly converted to number value and like this finally the output will be number.
console.log(3 - "1");
console.log(4 * "8");
console.log(4 / "8");

//numericStrings as operands for the operators - / * will result in the numericstring operands being implicitly converted to number value and like this finally the output will be number.
console.log("3" - "1");
console.log("4 " * "8");
console.log("4 " / "8");

/*Numericstring and boolean as operands
false is evaluated as 0
true is evaluated as 1
*/
console.log(5 - true); // 4
console.log(5 - false); //5
console.log(5 * true); //5
console.log(5 * false); //0
console.log(5 / true); //5
console.log(5 / false); //infinity

/*NumericString and null as operands
null is treated as zero
 */
console.log('5'* null) //0
console.log('5'- null)//5
console.log('5'/ null)//infinity

/*Number and null as operands
null is treated as zero
 */
console.log(5* null) //0
console.log(5- null)//5
console.log(5/ null)//infinity

// undefined with any of number,boolean or null as operands results into NaN.
console.log(5 + undefined)//NaN
console.log(null * undefined) //NaN
console.log(true + undefined) //NaN
console.log('5' - undefined) //NaN
console.log('5' * undefined) //NaN
console.log('5' / undefined) //NaN

// undefined + any string =String
console.log(undefined + "5") //undefinedColince

//Explicit Type conversion

// Converting numericstring,emptystring and boolean to number

      // Using Number() global method
console.log(Number('5')); // 5
console.log(Number('')); // 0
console.log(Number(true)); // 1
console.log(parseInt('3.14')) //3
console.log(parseFloat('3.14')) //3.14

//Converting Other Datatypes to String

    // Using String() global method
console.log(String(500))
console.log(String(null))
console.log(String(true))
console.log(String(undefined))

      //Using toString() method -->Will however not work on null and undefined
console.log((500).toString())
console.log((true).toString())
// console.log((null).toString())   //will throw an error
// console.log((undefined).toString()) //will throw an error

// Converting other Datatypes to boolean
console.log(Boolean(500)) // true
console.log(Boolean("Hello")) // true
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(0)) // false
console.log(Boolean('     ')) // true

//    EQUALITY

/*
==  -->If types are same, goes ahead and compares .Else Js will try to perform implicit conversion/coersion to make the datatypes same and then go ahead and do the comparison.
===   -->More strict and ensures that both the values to be compared Must be of the same type and will not perform implicit conversion/coersion. Since a number is different from string type, then false will be returned as the output.

Note:It is not wrong to use double equals but as a beginner it is probablly safe to use triple equals to check equality and this is because their is some strange coercion that JS does.
EX 1: If variable1 is equal to 0 and variable2 is equal to empty string. If you use double equal to perform equality on this two, then happilly you will get your result as: true

EX 2: If variable1 is equal to false and variable2 is equal to empty string. If you use double equal to perform equality on this two, then happilly you will get your result as: true

EX 3: If variable1 is equal to null and variable2 is equal to undefined. If you use double equal to perform equality on this two, then happilly you will get your result as: true

In the above 3 exapmles,all those values we've seen are considered as falsey values in JS and double equals will treat them as equal, which you can see maybe confusing and may lead to incorrect results.

Therefore as a beginner just use tripple equals as an equality operator.

*/

// When the datatypes are same -->No difference you may see between the two equality operators usage.
const var1 = 'test'
const var2 ="test"
console.log(var1==var2) //true
console.log(var1===var2) //true

// When the datatypes are not the same for the values we are comparing,then their will be a big difference between the two equality operators.
const var3 = '10'
const var4 =10
console.log(var3==var4) //true
console.log(var3===var4) //false