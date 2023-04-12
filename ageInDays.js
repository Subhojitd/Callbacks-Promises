function ageIndays(person){

    let fullname = person.firstName + " " +person.lastName

    let ageIndays = person.age * 365;

    return function () {
        console.log(`The person's full name is ${fullname} and his age in days is ${ageIndays} .`)
    }
}

let person = {
    firstName: "Subhajit",
    lastName : "Das",
    age : 21
}

let fullDetails = ageIndays(person)

fullDetails()
