let schoolName : "DPS" | "DAV" = "DPS";
let another : string = "KV";

another = schoolName;
schoolName = "DAV";

console.log(schoolName);
console.log(another);


type complex = {
    real :number,
    img :number,
    add: (c :complex, i : number) => complex
}

interface Icomplex  {
    real : number,
    img : number,
    add : (c :Icomplex,i?:number) => Icomplex
}

let c1 : complex = {
    real :10,
    img : 10,
    add : (c,i) => {
        return c;
    }
}

let c2 : Icomplex  = {
    real : 9,
    img : 9,
    add : (c,i) => {
        return c;
    }
}

console.log(c1);
console.log("before");

c1 = c2;


console.log("after");

console.log(c1)