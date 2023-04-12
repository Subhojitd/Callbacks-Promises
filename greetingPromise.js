function greet(name){
    return new Promise(function(resolve,reject){
        // Check if it is a string
        if(typeof name ==="string"){
            let greeting = `Hello ${name}`
            
            // resolve
            resolve(greeting);
        }else{
            reject("Error: name should be a string.")
        }
    })
}

greet(4564)
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.log(error);
})