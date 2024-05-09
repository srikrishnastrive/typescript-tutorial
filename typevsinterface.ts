//type vs interface
//for definging custom types for arrays,type kryword in more easy
//type are for primitive data types like number,string arrray
type text = string;

type stringArray = string [];
//using an interface we will define an object which will be always having keys
//of type number and value to be of the type of the array

//interfaces for objects
interface numberArray {
    [index : number] :number,
}
