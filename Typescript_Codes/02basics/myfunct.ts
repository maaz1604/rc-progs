function addtwo(num:number) {
    return num+2;
};

addtwo(36);

function uppercase(val:string):string{
    return val.toUpperCase();
}

const gethello = (t:string):string => {
    return "Hello!"
}

const city = ["Surat","Pune","Gwalior"];

city.map((city):string => {
    return `I live in ${city}`;
})

uppercase("kolet");

function consoleError(errmsg:string):void {
    console.log(errmsg);
    // return 244;
}

function handleError(errmsg:string):never{   //this function never return a value
    throw new Error(errmsg);
}



export {};