let number = 20
let pembagi = 0

for (let i = 1; i <= number; i++) {
    if (number % i ===0) {
        pembagi++
    }
} 

console.log(pembagi === 2 ? "prime number" : "not prime number")