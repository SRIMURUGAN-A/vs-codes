let size= 10;
let chess=""
for(let x=0; x<size; x++){
    for (let y=0; y<size; y++){
        if ((x+y)%2==0){
            chess+=" "
        }else{
            chess+="#"
        }
    }chess+="\n"
}
console.log(chess)


function power(base, top){
    if(top==0){
        return 1;
    }else{
        return base*power(base,top-1);
    }
}

console.log(power(2,5))
console.log("sd")
