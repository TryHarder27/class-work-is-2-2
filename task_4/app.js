// const people = ["Tom", "Bob", "Ron", "Harry", "Stan"];
// // console.log(people);

// for ( let i = 0; i < people.length; i++ ) {
//     let result = people[i];
//     console.log(result);
// }


// let array =  [ ["Tom", 16], ["Bob", 17], ["Stan", 36] ];
// // console.log(array[2] [0]);

// for ( let i = 0; i < array[i].length; i++ ) {
//     for ( let j = 0; j < 2; j++ ) {
//         let result = array[i][j];
//         console.log(result);
//     }
//     console.log('-----------')
// }

// for...in - выводит только индекс массива
// for...of - выводит только элементы массива

// const people = ["Tom", "Bob", "Ron"];


// for ( let item in people ) {
//     // console.log(people[item]);
//     console.log(item);
// }

let person = { name: "Tom", age: 17 };
// console.log(person["name"]);

for ( let item in person ) {
    let result = person[item]
    console.log(item);
}