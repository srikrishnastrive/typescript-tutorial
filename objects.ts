/***
 * how to define types for objects
 * -- classes
 * --- interface
 */

class car {
    name : string;
    constructor(name:string){
        this.name = name;
    }
    display(name:string){
        console.log(this.name);
    }
}

interface product {
    name:string;
    price:number;
    brand:string
    display (): void;
}

let p1 : product = {
    name :"Iphone",
    price:100000,
    brand:"Apple",

    display : () => {
        console.log("display");
    }
}


console.log(p1);
