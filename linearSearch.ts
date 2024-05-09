type pairOfNumbers = [number,number];

type pairOfNumbersAndString = [number,string];

//any will give loose typing and we lost grip of types
//generics coming in the picture to hold typing

function linearSearch (array:number [],target:number) : pairOfNumbers {
    for (let i = 0; i < array.length; i++){
        if (array[i] == target) return [i,array[i]];
    }
    return [-1,target];
}

function linearSearchString (array: string [],target :string) :pairOfNumbersAndString {
    for (let i = 0; i < array.length ; i++) {
        if(array[i] == target) return [i,array[i]]
    }

    return [-1,target];
}

const array : number[] = [1,2,5,1,2,3,54,0,6,-2,1];
console.log(linearSearch(array,2));
console.log('-----------------------------------------');
const stringArray : string[] = ["abc","def","ghi","jkl"];
console.log(linearSearchString(stringArray,"def"));


// generic type dynmaic input with out any due to loose typing

function linearSearchGeneric<T, R>(array:T[],target:T,y:R): [number,T]{
    for (let i = 0 ; i < array.length; i++){
        if(array[i] === target){
            return [i,array[i]]
        }
    }
    return [-1,target];
}

console.log('---------------generic types-------------------');

console.log(linearSearchGeneric<number,string>(array,3,"def"));
console.log(linearSearchGeneric<string,number>(stringArray,"def",-2));