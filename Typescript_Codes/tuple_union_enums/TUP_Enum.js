"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// There are cases or say scenarios where you want specific things into your array in a specified and strict manner
// like there is number should come first before string and boolean will come after string and follow this accordian strictly
// like in the case of API calls because the  API Structured Data is always in a very  specific format
var admin1;
admin1 = ["kl876ty", 98547, true];
var newuser = [455, "tushar@gmail.com"];
newuser[1] = "jk.com";
newuser.push(856);
newuser.push(874);
newuser.push("latin");
console.log(newuser);
