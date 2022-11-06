//check if number is prime or not
let num = 457;
let count = 0;
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(num, " is Prime number");
} else {
  console.log(num, "is not Prime ");
}
