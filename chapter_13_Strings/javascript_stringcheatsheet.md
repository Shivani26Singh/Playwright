# JavaScript String Methods — Cheat Sheet

> Quick reference for all common String methods with one-liner examples.
> Strings are **immutable** — every method returns a *new* string, never mutates the original.

---

## Search & Check

| Method | Example | Result |
|--------|---------|--------|
| `includes()` | `"playwright".includes("play")` | `true` |
| `startsWith()` | `"https://x".startsWith("https")` | `true` |
| `endsWith()` | `"file.js".endsWith(".js")` | `true` |
| `indexOf()` | `"banana".indexOf("a")` | `1` |
| `lastIndexOf()` | `"banana".lastIndexOf("a")` | `5` |
| `search()` | `"login?x=1".search(/login/)` | `0` |
| `match()` | `"a1b2".match(/\d/g)` | `["1","2"]` |
| `matchAll()` | `[..."a1b2".matchAll(/\d/g)]` | array of matches |
| `at()` | `"play".at(-1)` | `"y"` |
| `charAt()` | `"play".charAt(0)` | `"p"` |
| `charCodeAt()` | `"A".charCodeAt(0)` | `65` |
| `codePointAt()` | `"😀".codePointAt(0)` | `128512` |

---

## Extract / Slice

| Method | Example | Result |
|--------|---------|--------|
| `slice()` | `"playwright".slice(0,4)` | `"play"` |
| `substring()` | `"playwright".substring(0,4)` | `"play"` |
| `substr()` ⚠️ deprecated | `"playwright".substr(0,4)` | `"play"` |
| `split()` | `"a,b,c".split(",")` | `["a","b","c"]` |

---

## Transform Case

| Method | Example | Result |
|--------|---------|--------|
| `toUpperCase()` | `"play".toUpperCase()` | `"PLAY"` |
| `toLowerCase()` | `"PLAY".toLowerCase()` | `"play"` |
| `toLocaleUpperCase()` | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| `toLocaleLowerCase()` | `"I".toLocaleLowerCase("tr")` | `"ı"` |

---

## Trim / Pad

| Method | Example | Result |
|--------|---------|--------|
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` | `"hi  ".trimEnd()` | `"hi"` |
| `padStart()` | `"5".padStart(3,"0")` | `"005"` |
| `padEnd()` | `"5".padEnd(3,"0")` | `"500"` |

---

## Replace / Repeat / Concat

| Method | Example | Result |
|--------|---------|--------|
| `replace()` | `"a-a".replace("a","b")` | `"b-a"` |
| `replaceAll()` | `"a-a".replaceAll("a","b")` | `"b-b"` |
| `repeat()` | `"ab".repeat(2)` | `"abab"` |
| `concat()` | `"a".concat("b","c")` | `"abc"` |
| `+` operator | `"a" + "b"` | `"ab"` |

---

## Convert / Misc

| Method | Example | Result |
|--------|---------|--------|
| `toString()` | `(123).toString()` | `"123"` |
| `String()` | `String(true)` | `"true"` |
| `normalize()` | `"é".normalize()` | unicode-normalized |
| `localeCompare()` | `"a".localeCompare("b")` | `-1` |
| template literal | `` `Hi ${name}` `` | `"Hi Pramod"` |
| `String.raw` | `` String.raw`a\nb` `` | `"a\\nb"` |

---

## Property

| Item | Example | Result |
|------|---------|--------|
| `length` | `"play".length` | `4` |

---

## Key Gotchas

| Trap | Detail |
|------|--------|
| `slice` vs `substring` | `slice` supports negative index; `substring` swaps args if `start > end` and treats negatives as `0`. Prefer `slice`. |
| `search` vs `indexOf` | `search` takes a **regex**; `indexOf` takes a **literal string**. |
| `replace` vs `replaceAll` | `replace` with a string replaces only the **first** match; use `replaceAll` or `/g` regex for all. |
| `at()` vs `charAt()` | `at()` accepts negative index (`-1` = last char); `charAt()` does not. |
| Immutability | No method changes the original string — always returns a new one. |
------------

## JavaScript String Methods for Playwright Automation

### Search & Check

```js
str.includes("text")
str.startsWith("https")
str.endsWith(".js")

str.indexOf("text")
str.lastIndexOf("text")

str.search(/regex/)
str.match(/regex/g)
[...str.matchAll(/regex/g)]

str.at(-1)
str.charAt(0)
```

Examples:

```js
"playwright".includes("play")     // true
"https://site".startsWith("https") // true
"file.js".endsWith(".js")         // true

"banana".indexOf("a")            // 1
"banana".lastIndexOf("a")        // 5

"Order123".search(/\d+/)         // 5
"a1b2".match(/\d/g)              // ["1","2"]

"play".at(-1)                    // "y"
"play".charAt(0)                 // "p"
```

---

### Extract / Slice

```js
str.slice(start, end)
str.substring(start, end)
str.split(separator)
```

Examples:

```js
"playwright".slice(0, 4)         // "play"
"playwright".slice(-4)           // "ight"

"playwright".substring(0, 4)     // "play"

"a,b,c".split(",")               // ["a","b","c"]
```

---

### Transform Case

```js
str.toUpperCase()
str.toLowerCase()
```

Examples:

```js
"play".toUpperCase()             // "PLAY"
"PLAY".toLowerCase()             // "play"
```

Case-insensitive check:

```js
"Login Successful"
  .toLowerCase()
  .includes("login")             // true
```

---

### Trim & Pad

```js
str.trim()
str.trimStart()
str.trimEnd()

str.padStart()
str.padEnd()
```

Examples:

```js
"  hello  ".trim()               // "hello"

"5".padStart(3, "0")             // "005"
"5".padEnd(3, "0")               // "500"
```

---

### Replace

```js
str.replace()
str.replaceAll()
```

Examples:

```js
"a-a".replace("a", "b")
// b-a

"a-a".replaceAll("a", "b")
// b-b
```

Regex replacement:

```js
"FAIL fail Fail".replace(/fail/gi, "PASS")
// PASS PASS PASS
```

Difference:

```js
"FAIL FAIL".replace("FAIL", "PASS")
// PASS FAIL

"FAIL FAIL".replaceAll("FAIL", "PASS")
// PASS PASS

"FAIL FAIL".replace(/FAIL/g, "PASS")
// PASS PASS
```

---

### Join & Repeat

```js
str.repeat()

array.join()
```

Examples:

```js
"ab".repeat(2)
// abab

["a", "b", "c"].join(",")
// a,b,c
```

---

### String ↔ Number

```js
Number("123")
parseInt("123px")
parseFloat("10.5")
```

Examples:

```js
Number("123")       // 123
parseInt("123px")   // 123
parseFloat("10.5")  // 10.5
```

---

### Template Literals

```js
const name = "Pramod";

`Hello ${name}`
// Hello Pramod
```

---

### Regex Test

```js
/\d+/.test("Order123")
// true

/\d+/.test("Order")
// false
```

---

### Playwright Real Examples

Get text and clean it:

```js
const text = await page.locator(".message").textContent();

const cleanText = text?.trim();
```

Check message:

```js
expect(text?.includes("Success")).toBeTruthy();
```

Case-insensitive validation:

```js
expect(
  text?.toLowerCase().includes("success")
).toBeTruthy();
```

Remove extra spaces:

```js
const normalized = text?.replace(/\s+/g, " ");
```

Extract Order ID:

```js
const orderId = text?.match(/\d+/)?.[0];
```

Convert price:

```js
const priceText = await page.locator(".price").textContent();

const price = parseFloat(priceText || "0");
```

---

## Most Important for Playwright

Memorize these first:

```js
length

includes()
startsWith()
endsWith()

indexOf()

slice()
split()

trim()
trimStart()
trimEnd()

replace()
replaceAll()

toLowerCase()
toUpperCase()

template literals
```

---

## Important Gotchas

### Strings are immutable

```js
let str = "hello";

str.toUpperCase();

console.log(str);
// hello
```

Must assign:

```js
str = str.toUpperCase();
```

### slice() supports negative indexes

```js
const arr = [1, 2, 3, 4, 5];

arr.slice(-2);      // [4,5]
arr.slice(-3,-1);   // [3,4]
arr.slice(-3);      // [3,4,5]
```

### replace() vs replaceAll()

```js
replace()     // first occurrence only
replaceAll()  // all occurrences
```

### Prefer slice()

```js
slice()       ✅ Modern
substring()   ⚠️ Old
substr()      ❌ Deprecated
```

