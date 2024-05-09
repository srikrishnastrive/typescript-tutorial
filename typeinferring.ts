const result = {
    name :"Sanketh",
    marks:90
}

/***
 * the type of the above object s infered as {name:string,marks:number}
 * something like the given object below
 * const result : {name:string,marks:number,} = {
    name :"Sanketh",
    marks:90
}
 * const result : {name:string,marks:number,address ? : string} = {
    name :"Sanketh",
    marks:90
}
 * 
 */
console.log(result);

result.marks = 98;

console.log(result);
//making address optional
// result.address = "delhi";

/***
 * Now the above statement will throw a compile error because in the type {name:String,mrk:nmumber}
 * we never mentioned anythig about the address
 * Thtat's why TS thinks we are violating the default type
 * to solve this we can add an additional optional property while defining the optional
 * const result : {name:string,marks:number,address ? : string} = {
    name :"Sanketh",
    marks:90

*/

// console.log(result);

//instead of repeating the type object we will replace with common
/**
 * const result1  : {name:string,marks:number,address ? : string} = {
    name :"Sanketh",
    marks:90
}

const result2  : {name:string,marks:number,address ? : string} = {
    name :"srikrishna",
    marks:80
}
 * 
 */

type Details = {name:string, marks :number,address? : string};

const result1 : Details = {
    name : "Sanketh",
    marks:90,
}

const result2 : Details = {
    name : "sri",
    marks:80,
}

result1.address = "delhi";
console.log(result1);



