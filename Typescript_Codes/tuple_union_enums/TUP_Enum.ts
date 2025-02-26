// There are cases or say scenarios where you want specific things into your array in a specified and strict manner
// like there is number should come first before string and boolean will come after string and follow this accordian strictly
// like in the case of API calls because the  API Structured Data is always in a very  specific format
let admin1:[string,number,boolean];

admin1 = ["kl876ty",98547,true];
// admin1 = [98745,"hh525",false]; this will throw an error as this is tuple which strictly follows the ordering 

type user = [number,string];
const newuser:user=[455,"tushar@gmail.com"];
newuser[1]="jk.com";
newuser.push(856);
console.log(newuser);

export {};