const User = {
    firstname:"Rahul",
    email:"kodex@gmail.com",
    isActive:true
};

function createuser({name:string,isPaid:boolean}){};

// createuser(); this will give error

let newUser = {name:"Preet",isPaid:false,email:"justdial@gmail.com"};

createuser(newUser); //in this ex it was able to pass on much more information passed on what was expected

function createCourse():{name:string,price:number}{
    return {name:"Vue",price:9658}
};

export {};