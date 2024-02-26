// a + b = ...

const Sum = (a = 2, b = 3) => {
    let result = a + b;
    console.log(result);
}

Sum();
Sum(5, 7)

const Age = (e) => {
    if ( e === undefined ) {
        console.log("Укажите возраст");
    } else {
        console.log(e);
    }
}

Age(32);


let Person = (array) => {
    console.log(array[0]);
}

let tom = ("Tom", 37, "tom@example.com");
let bob = ("Bob", 37, "tom@example.com");
Person(tom);
Person(bob);

let Person2 = (Object) => {
    console.log(Object["name"]);

}

let tom2 = { name: "Tom", age: 37, email: "tom@example.com" }
Person2(tom2);




// (a + b) * (c + b) = ...
let Primer = (a = 2, b = 2, c = 2, d =2)  => {
    let res1 = a + b;
    let res2 = c + d;
    let result = res1 * res2;
    // console.log(result);
    return result; 
}

Primer();