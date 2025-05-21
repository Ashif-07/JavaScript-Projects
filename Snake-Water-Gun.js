let a = 1,
  userscore = 0,
  cgscore = 0;
while (a <= 3) {
  let rn = Math.floor(Math.random() * 30);

  let cg;
  if (rn >= 0 && rn <= 10) cg = "sanke";
  else if (rn > 10 && rn <= 20) cg = "water";
  else cg = "gun";

  let x = prompt("'Snake' 'Gun' 'Water'\n Choose One of  These ");
  let user = x.toLowerCase();
  alert(`Computer Choose \'${cg.toUpperCase()}\'`);

  if (
    (cg == "snake" && user == "snake") ||
    (cg == "gun" && user == "gun") ||
    (cg == "water" && user == "water")
  ) {
  } else if (
    (cg == "snake" && user == "gun") ||
    (cg == "gun" && user == "water") ||
    (cg == "water" && user == "snake")
  ) {
    userscore += 1;
  } else if (
    (user == "snake" && cg == "gun") ||
    (user == "gun" && cg == "water") ||
    (user == "water" && cg == "snake")
  ) {
    cgscore += 1;
  }
  a++;
}
if (userscore === cgscore) alert("Match Draw");
else if (userscore > cgscore)
  alert("Congratulation User are Win with " + userscore + " Score");
else alert("ooh Computer Win! with " + cgscore + " Score");
