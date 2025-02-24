const bikes: string[] = [];
const ages: number[] = [];

bikes.push("Yamaha");
ages.push(52);

//There is another way to represent array
const schools: Array<string> = [];
schools.push("DAV");

//We can customised array by using 'types'
type Users = {
    firstname: string;
    isActive: boolean;
};

const alluser: Users[] = []; //this will create an array of 'Users' type.

alluser.push({ firstname: "Kamal", isActive: false });

const MLModels: number[][] = [  // this will create an array inside a number array
    [568, 745],
    [879, 546, 125]
];

//Read only arrays

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const trst: readonly string[] = ["Gohan", "Goku", "Madara"]; // this is another way of representing the readonly array
numbers.slice();// this is okay
// numbers.push(856);        // this will throw an error as this is non-mutable
console.log(numbers)

function r_str(arr: readonly string[]) {
    arr.slice();
    // arr.push("hello") this will throw an error as this is read only 
    console.log(arr);
}

export {};