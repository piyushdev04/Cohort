// Objects basics

const users1 = {
    firstName: 'Piyush',
    gender: 'male'
}

console.log(users1["firstName"])
console.log(users1["gender"])

// Q. write a program that prints all the male people's first name give a complex object

const allUsers = [{
    firstName: "Piyush",
    gender: "male"
},{
    firstName: "raman",
    gender: "male"
},{
    firstName: "priya",
    gender: "female"
}]

for (let i=0; i<allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"])
    }
}