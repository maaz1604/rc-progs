class Users {
    public email: string;
    name: string;
    private readonly city: string;
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur" // this is totally accessible bcz it is within the class
    }
}

const xvclass = new Users("hrithik65@gmail.com", "Hrithik");

// xvclass.city; Property 'city' is private and only accessible within class 'Users'. 

// A lot of developer write classes like given below:-
class Admin {
    readonly car: string = "Porche";
    constructor(public username: string, public U_ID: string, private U_password:string) {
        this.username = username;
        this.U_ID = U_ID;
        this.U_password=U_password;
    }
}