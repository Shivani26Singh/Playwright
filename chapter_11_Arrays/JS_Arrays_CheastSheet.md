# JavaScript Array Methods for Playwright Automation

> Arrays are mutable. Some methods modify the original array, others return a new array.

---

## Create Arrays

```js
const arr = [1, 2, 3];

Array(3)
// [ <3 empty items> ]

Array.of(1, 2, 3)
// [1,2,3]

Array.from("play")
// ['p','l','a','y']
```

---

## Access Elements

```js
const arr = [10, 20, 30, 40];

arr[0]      // 10
arr[1]      // 20

arr.at(0)   // 10
arr.at(-1)  // 40
arr.at(-2)  // 30

arr.length  // 4
```

---

## Add / Remove Elements

### push()

Adds to end

```js
const arr = [1,2];

arr.push(3);

console.log(arr);
// [1,2,3]
```

---

### pop()

Removes from end

```js
const arr = [1,2,3];

arr.pop();

console.log(arr);
// [1,2]
```

---

### unshift()

Adds to beginning

```js
const arr = [2,3];

arr.unshift(1);

// [1,2,3]
```

---

### shift()

Removes first element

```js
const arr = [1,2,3];

arr.shift();

// [2,3]
```

---

## Search & Check

### includes()

```js
[1,2,3].includes(2)
// true
```

---

### indexOf()

```js
["a","b","c"].indexOf("b")
// 1
```

---

### lastIndexOf()

```js
[1,2,1,3].lastIndexOf(1)
// 2
```

---

### find()

Returns first matching element

```js
const users = [
  {id:1},
  {id:2}
];

users.find(u => u.id === 2);

// {id:2}
```

---

### findIndex()

```js
users.findIndex(u => u.id === 2);

// 1
```

---

### some()

At least one match

```js
[1,2,3].some(n => n > 2)

// true
```

---

### every()

All must match

```js
[1,2,3].every(n => n > 0)

// true
```

---

## Extract / Slice

### slice()

Does NOT modify original array

```js
const arr = [1,2,3,4,5];

arr.slice(1,4)
// [2,3,4]

arr.slice(-2)
// [4,5]

arr.slice(-3,-1)
// [3,4]
```

---

### splice()

Modifies original array

```js
const arr = [1,2,3,4];

arr.splice(1,2);

console.log(arr);
// [1,4]
```

Remove and insert:

```js
const arr = [1,2,3];

arr.splice(1,1,"A");

console.log(arr);
// [1,"A",3]
```

---

## Transform Arrays

### map()

Returns new array

```js
[1,2,3].map(x => x * 2)

// [2,4,6]
```

---

### filter()

Returns matching items

```js
[1,2,3,4].filter(x => x % 2 === 0)

// [2,4]
```

---

### reduce()

Combine values

```js
[1,2,3,4].reduce(
  (sum, n) => sum + n,
  0
)

// 10
```

---

### flat()

```js
[1,[2,3],[4]].flat()

// [1,2,3,4]
```

---

### flatMap()

```js
["a,b","c,d"]
  .flatMap(x => x.split(","))

// ["a","b","c","d"]
```

---

## Sort & Reverse

### sort()

⚠️ Sorts as strings by default

```js
[3,1,2].sort()

// [1,2,3]
```

Problem:

```js
[100,20,3].sort()

// [100,20,3]
```

Correct numeric sort:

```js
[100,20,3].sort((a,b) => a - b)

// [3,20,100]
```

Descending:

```js
[100,20,3].sort((a,b) => b - a)

// [100,20,3]
```

---

### reverse()

```js
[1,2,3].reverse()

// [3,2,1]
```

---

## Convert Arrays

### join()

```js
["a","b","c"].join(",")

// "a,b,c"
```

---

### toString()

```js
[1,2,3].toString()

// "1,2,3"
```

---

## Iteration

### forEach()

```js
[1,2,3].forEach(n => {
  console.log(n);
});
```

---

### for...of

```js
for (const item of arr) {
  console.log(item);
}
```

---

## Spread Operator

### Copy Array

```js
const arr1 = [1,2,3];

const arr2 = [...arr1];
```

---

### Merge Arrays

```js
const a = [1,2];
const b = [3,4];

const c = [...a, ...b];

// [1,2,3,4]
```

---

## Playwright Examples

Get all row texts:

```js
const rows =
  await page.locator("table tr")
    .allTextContents();

console.log(rows);
```

---

Check if value exists:

```js
expect(rows.includes("Admin"))
  .toBeTruthy();
```

---

Find specific row:

```js
const user =
  rows.find(row =>
    row.includes("John")
  );
```

---

Filter matching rows:

```js
const activeUsers =
  rows.filter(row =>
    row.includes("Active")
  );
```

---

Convert prices to numbers:

```js
const prices = ["100","200","300"];

const nums =
  prices.map(Number);

// [100,200,300]
```

---

Sum values:

```js
const total =
  nums.reduce(
    (sum,n) => sum + n,
    0
  );
```

---

## Most Important for Playwright

Memorize these first:

```js
length

push()
pop()

shift()
unshift()

includes()

find()
findIndex()

some()
every()

slice()
splice()

map()
filter()
reduce()

sort()

join()

forEach()

spread (...)
```

---

## Important Gotchas

### slice() vs splice()

```js
slice()   -> returns new array
splice()  -> modifies original array
```

---

### map() vs forEach()

```js
map()     -> returns new array
forEach() -> returns undefined
```

---

### sort() Problem

```js
[100,20,3].sort()
```

Wrong:

```js
[100,20,3]
```

Correct:

```js
[100,20,3].sort((a,b)=>a-b)
```

Result:

```js
[3,20,100]
```

---

### Negative Index

```js
const arr = [1,2,3,4,5];

arr.at(-1)
// 5

arr.at(-2)
// 4
```
