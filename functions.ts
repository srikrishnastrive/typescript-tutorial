function sum(a : number, b : number) : number {
    return a + b;
}

console.log(sum(10,20));

function sumOptional(a: number, b? : number) : number {
    return a + (b || 0);
}

console.log(sumOptional(10));