console.log("1");
console.log("2")
console.log("3")
console.log("4")
let data = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const nme =""
        if (nme){
            resolve(nme);
        }else{
            reject("name is not available");
        }
    }, 2000)

})

data 
  .then((name)=>{
    console.log(name);
  }) 
  .catch((err)=>{
    console.log(err);
  }) 
  .finally(()=>{
    console.log("test");
  });

  console.log("4");
  console.log("5")