const ip1 = document.querySelector("#number1") as HTMLInputElement;
const ip2 = document.querySelector("#number2") as HTMLInputElement;
const btn = document.querySelector("#button") as HTMLInputElement;

const add1 = (num1: number, num2:number) => {
  return num1 + num2;
};

btn.addEventListener("click", () => {
  // console.log(add1(ip1.value, ip2.value));
  console.log(add1(+ip1.value, +ip2.value));
});
