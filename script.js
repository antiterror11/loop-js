// //1-st
// let num = +prompt("please enter a number")
// let result = 1
// for(let i = 1; i <= num; i++){
//     result *= i
// }
// console.log(`${num}-ning factoriali: ${result}`)

//second
// let num = +prompt('Please enter a positive number')

//       if (num < 2) {
//         console.log(`You entered the wrong number`) // Agar raqam 2 dan kam bo'lsa, bu valid raqam emas
//       } else {
//         let primes = []

//         // Bu loop 2 dan boshlanib, kiritilgan raqamgacha davom etadi
//         for (let i = 2; i <= num; i++) {
//           // isPrime o'zgaruvchisi tub bo'lmagan son aniqlanmagunicha true qiymatni o'zida saqlab turadi
//           let isPrime = true

//           if (i < 2) {
//             // Raqam 2 dan kam bo'lsa isPrime o'zgaruvchisi falsega o'zgaradi
//             isPrime = false
//           } else {
//             // Ushbu tsikl joriy sonning 2 dan kvadrat ildiziga bo'linishini tekshiradi.
//             for (let j = 2; j <= Math.sqrt(i); j++) {
//               // Agar joriy raqam sikldagi istalgan raqamga bo'linadigan bo'lsa, u isPrime ni falsega o'zgartiradi va tsiklni to'xtatadi.
//               if (i % j === 0) {
//                 isPrime = false
//                 break // Agar raqam bo'linadigan bo'lsa, keyingi tekshirishni to'xtatamiz.
//               }
//             }
//           }

//           // Agar joriy raqam tub bo'lsa, u sonni tub sonlar arrayiga qo'shadi.
//           if (isPrime) {
//             primes.push(i)
//           }

//           console.log(`These are the prime numbers until ${num}: ${primes.join(', ')}`)
//         }
//       }
