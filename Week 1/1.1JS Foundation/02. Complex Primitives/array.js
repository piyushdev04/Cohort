// Q. write a program to print all the even numbers in an array

const ages = [21, 22, 23, 24, 25, 26, 27, 28, 100]
const numberOfPeople = ages.length;

for (let i=0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}

// Q. write a program to print the biggest number in array




// Q. write a program that prints all the male people's first name give a complex object

const personArray = ["Piyush", "Raman", "Maria"]
const genderArray = ["male", "male", "female"]

for (let i = 0; i<personArray.length; i++) {
    if (genderArray[i] == "male") {
        console.log(personArray[i])
    }
}



// Q. write a program that reverse all the elements of an array