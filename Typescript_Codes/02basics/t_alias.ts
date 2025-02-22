type Admin = {
    firstname:string;
    email:string;
    isActive:boolean
};

function createuser(User:Admin):Admin{
    return {firstname:"",email:"",isActive:false}
}

createuser({firstname:"",email:"",isActive:false});

type User = {
    name:string
    email:string
    isPaid:boolean
    readonly _id:string
    creditcardDetails?:string // ? this will make this detail optional to pass
};

let myUser:User = {
    name:"Rakesh Kumar",
    email:"sjxcj@gmail.com",
    isPaid:true,
    _id:"flow456#56$$90*&65"
}

myUser.email="thor45@gmail.com"; // this will allow to change the email.

// myUser._id=""  this will not allow to change the _id because _id is only readable not updatable.

type CardNumber = {
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetais = CardNumber & cardDate & {       // & it will mix all of these not this or that like | 'or' do.
    cvv:number
}   


export {};