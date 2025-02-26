interface User {
    readonly dBID : number,
    email:string,
    userID:number,
    googleId?:string
    // strartTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string, value:number):number
}

interface User {
    githubTocken:string
}

//Inheritence in Interface

interface Admin extends User {
    role:"Admin" | "TA" | "Learner"
}

const hitesh:Admin = {dBID:85,email:"rahul45@gmail.com",userID:874,githubTocken:"github",role:"TA",
    startTrail:() => {
        return "trail started"
    },
    getCoupon:(name:"jayesh",off:105) => {
        return 105;
    }
};

hitesh.email = "hch@gmail.com";