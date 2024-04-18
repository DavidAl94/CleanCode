type size = ''|'S'|'M'|'L'|'XL';


class product{
    constructor(
        public name: string = '',
        public price: number = 15,
        public size: size = ''
    ){}
    isProductReady():boolean{
        for(const key in this){
            //console.log(key, typeof this[key]);
            switch(typeof this[key]){
                case "string":
                    if((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                case "number":
                    if((<number>this[key]) <= 0 ) throw Error(`${key} is zero`);                    
                case "bigint":
                    if((<bigint>this[key]) <= 0 ) throw Error(`${key} is zero`); 
                break;
                default:
                    throw Error(`${key} is not valid`); 
            }
        }
        return true;
    }
    toString(){
        //no Dry
        // if(this.name.length <=0) throw Error("Ingresar nombre");
        // if(this.price <= 0) throw Error("Ingresar precio");
        // if(this.size.length <=0) throw Error("Ingresar talla");
        if(!this.isProductReady()) return;       

        return `${this.name} (${this.price}),${this.size}`

    }

}

(()=>{
    const bluepants = new product("Blue",10,"M");
    console.log(bluepants.toString());
    alert(bluepants.toString());


})();