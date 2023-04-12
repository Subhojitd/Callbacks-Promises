function manipulateString(str){
    let manipulatedString = str.toUpperCase();
    
    return function(){
        console.log(`The manipulated string is ${manipulatedString}`)
    } 
}

let myString = "Hey there, What's upp . "

let finalString = manipulateString(myString);

finalString()