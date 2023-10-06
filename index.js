// Utility
function print(tag, value){
    console.info(tag, value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
let myArr =[1,2,3,4,5,6,7,8,9,10];
    return myArr

}
// display value
 print(`Scores Array:`, scores())



// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
let thirdValue = scores()[2];
    // return the elememt
    return thirdValue
    console.log()
}
// display value
print(`Third Score:`, accessScore())




// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)

    // return the nested arrays
}
// display value
// print(`Nested Score Array:`, nestedScores())


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array

    // return the number of elements
    return scores().length

}
// display value
print(`Number of elements:`, getNumberOfScores())


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    let newArr = scores();
    newArr.push(11, 12);

    // return the new array with the elements that have been added
    return newArr;

}
// display value
 print(`Added elements:`, addElement())



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
 let studentObji =  {
    name: "John Doe",
    age: 20,
    email: "john.doe@email.com",
    studentNumber: "M1234",
    isKenyan: true 
}
    // return student object
    return studentObji
}
// display value
print(`Student`, student())

// TODO: Access student's age
function studentAge(){
    // access student age using key
    let age = student().age


    // return student age
    return age;

}
// display value
 print(`Student Age:`, studentAge())


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    return student().email


    // return student email

}
// display value
print(`Student Email:`, studentEmail())


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    let userObji = {
        user: {
            id: 1,
            name: "John Doe",
            course: "Software Engineering"
            

        },
        course: {
            name: "tech.studies",
            number:738

        }


    }


    // return user object
return user
}
// display value
 print(`User:`, user())


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    let userObji = user();
    let entries = Object.entries(userObji)

    // return entries
    return entries;


}
// display value
 print(`User Entries:`, getUserEntries())


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys
    let userObji = user();
    let keys = Object.keys(userObji);
    


    // return keys
    return keys;
    

}
// display value
print(`User Keys:`, getUserKeys())

