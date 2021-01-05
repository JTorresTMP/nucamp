//Challenge Question: Arrays and Objects Week 2

const dummyArray = [];
const dummyObj = {};

//Question 1
/* 
One way to add an object to an existing array is to simply push it like in line 9
To add an array to an object, you simply assign it to the object like in line 17
*/
dummyArray.push({
    name: 'Jose Torres',
    sex: 'male'
});
console.log(dummyArray);

dummyObj.places = ['London', 'Madrid', 'Stormwind'];
console.log(dummyObj);

//Question 2
/* 
To find the length of an array you can simply call the .length method on an array like in line 25
To find the number of properties that an object has you can do Object.keys(obj).length
*/

console.log(['Breakfast', 'Lunch', 'Dinner'].length);
const q2Obj = {
    first: 'Jose',
    last: 'Torres',
    likes: 'pizza',
    hobbies: ['video games', 'programming']
};
console.log(Object.keys(q2Obj).length);

//Question 3
/*
There are a couple of ways to do this. One of these is to filter through the array and check
the length of the array to see if any of the objects match your conditions.
*/
const exists = dummyObj.places.filter((place) => place === 'Stormwind');
if (exists.length > 0) {
    //execution
}

//Alternatively you could use the same collection.find method, but pass in parameters.
//The most common lookup is by _id, but you are free to query whatever data you want.
//More info here: https://docs.mongodb.com/manual/reference/method/db.collection.find/
