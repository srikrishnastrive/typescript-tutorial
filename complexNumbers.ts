class complex {
    private real : number;
    private imag : number;

    constructor(real : number, imag : number){
        this.real = real;
        this.imag = imag;
    }

    display() : void{
        console.log(`${this.real} + i${this.imag}`);
    }

    add (C:complex) : void {
        this.real += C.real;
        this.imag  += C.imag;
    }

    multiply(C:complex) : void {
        this.real = (this.real * C.real - this.imag * C.imag);
        this.imag = (this.real * C.imag - this.imag * C.real);
    }
}


let c1:complex = new complex(2,3);
let c2 : complex = new complex(1,3);

c1.display();
c2.display();
c1.add(c2);
console.log("------")
c1.display();
console.log("multiply");
c1.multiply(c2);
c1.display();