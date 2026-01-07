const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if (d) {
    b = a
}

d = a + (b * c)
d++
b += 2

console.log(b)
console.log(c)
console.log(d)