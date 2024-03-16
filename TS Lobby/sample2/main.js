const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");
const button = document.querySelector("#button");

/*
Unecessarrily this function can take numbers as well as numbers without any issues. This is a painful bug difficult to identify if the purpose of this function is to perform arithmetic operations.
*/
const add = (num1, num2) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  // console.log(input1.value);
  // console.log(input2.value);
  // console.log(button.value);
  console.log(add(input1.value, input2.value));
  console.log(add(+input1.value, +input2.value)); // doing it correctly in pure JS. This is how we can convert Strings to Numbers.
});
