// Stack (Primitive) and Heap(Non-Primitive)

let userOne = {
    email: "firstnamelastname@gmail.com",
    phone: 123456789
}

let userTwo = userOne;
userTwo.phone = 7890678;
 
console.log(userOne);


// In Stack memory you will get the copy of the orginal data. However in Heap memory you will get the orginal refernce of the data.