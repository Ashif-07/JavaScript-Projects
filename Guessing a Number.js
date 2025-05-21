let rn = Math.floor(Math.random() * 100);
let count = 0;
let num;
do {
  count++;
  num = Number(prompt("Guess the number : "));
  if (num == rn) console.log("Number", rn, " is Guessed in ", count, " times");
  else if (rn > num)
    console.log("Original Number is greater than your number " + num + " ");
  else console.log("Original Number is Lesser than your number " + num + " ");
} while (num != rn);
