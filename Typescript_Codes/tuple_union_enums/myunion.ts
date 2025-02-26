let score: number | string = 856;
score = 78;
score = "Myunion";

// This kind of thing is very helpful for writing the functions because sometimes there are situations 
// that functions either accept multiple values or sometimes returns multiple values.
type User = {
    firstname: string;
    age: number;
    id: string;
}
type Admin = {
    username: string;
    id: string;
}
let rahul: User | Admin = { firstname: "Rahul", id: "856PF", username: "rk456" };
rahul = { username: "HC", id: "985PF" };


// function getDBId(id:number | string) {
//     //making some api calls
//     console.log(`DB id is ${id}`);
// }
// // getDBId(89); getDBId("yhu7865"); both are correct as id are string and number both 

function getDBId(id: number | string) {

    // id.toLowerCase(); we cannot do these as id is both string and Number and considered these as a new data type

    if (typeof id === 'string') {
        id.toLowerCase();
    }
    if (typeof id === 'number') {
        id + 9658;
    }
}

const data:number[]=[1,8,7];
const accestion_number : string[] = ["897RTYS","PF5634RT"];
// const U_ID:string[] | number[] = [8 ,9 , "yh234345PO"]; This is not allowed so it can either be all number or all strings 
const S_ID:(string | number | boolean)[]=[8 ,9 , "yh234345PO" , false]; // this is allowed
console.log(S_ID);

let seatallotment:"aisle" | "middle" | "window";
seatallotment = "middle";
// seatallotment = "crew" this will throw an error as this is not mentioned above 