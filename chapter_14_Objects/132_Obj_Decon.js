//Object destructuring lets you extract properties from an object and store them in variables.

const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;  // Equivalent to const name1 = user.name1;const age = user.age;
console.log(name1);  //John
console.log(age);    //30

// Rename variables
const { name1: userName, age: userAge } = user;   //const userName = user.name1;const userAge = user.age;
console.log(userName);  //John
console.log(userAge);  //30

// destructuring
// const { age } = user;  //SyntaxError: Identifier 'age' has already been declared
// age = 35;

// Default values
const { country = "USA" } = user;
console.log(country);   //USA - The object doesn't contain a country property, So JavaScript uses the default value:
console.log(user);   //{ name1: 'John', age: 30, city: 'NYC' }

//If property exists
const user = {
    country: "India"
};

const { country = "USA" } = user;

console.log(country);  // India - Default value is ignored.

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data; 
console.log(data.user.address.city);  //NYC

/*
| Syntax                                         | Meaning                      |
| ---------------------------------------------- | ---------------------------- |
| `const { name1 } = user`                       | Extract `name1` property     |
| `const { name1: userName } = user`             | Extract and rename           |
| `const { country = "USA" } = user`             | Use default value if missing |
| `const { age } = user`                         | Creates variable `age`       |
| `const { user: { address: { city } } } = data` | Extract nested property      |
| `data.user.address.city`                       | Traditional property access  |


const { name } = user;  //Creates a new variable name.Does not remove name from user.Does not modify user.
//For primitive values (string, number, boolean), the value is copied.
//For objects/arrays, the reference is copied.

That's why after:

    const { name, age } = user;

both of these are true:

console.log(name); // John
console.log(user.name); // John

The object still keeps all its properties.

*/