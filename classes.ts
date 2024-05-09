class product {
    public name : string;
    private price : number | undefined;
    readonly category : string;
    readonly tags :string[];

    constructor(name : string,category : string,price ? : number ){
        this.name = name;
        this.price = price;
        this.category = category;
        this.tags = ["electronics","mobiles"];
    }

    display () : void {
        this.tags[0] = "elect"
        console.log("product name is", this.name,"and price is",this.price,"and category is",this.category,"the tags are",this.tags[0]);
    }

    setprice (p:number) : void {
        if (p < 0) {
            return console.log("price should positive");
        }
        this.price = p;
    
    }
}

let iphone =  new product("iphone 12 pro max","electronics",20000);


console.log(iphone);
console.log(iphone.display());

