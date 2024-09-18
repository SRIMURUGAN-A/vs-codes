class temperature{
    constructor(temp){
        this.temperature = temp;
    }

    get temp(){
        return this.temperature;
    }
}

let temp1 = new temperature(34)

console.log(temp1.temp)
