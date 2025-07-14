let ism = document.getElementById("ism");
let familiya = document.getElementById("familiya");
let yosh = document.getElementById("yosh");

let firstName = prompt("Ismingizni kiriting:");

let lastName = prompt("Familiayangizni kiriting:");

let age = prompt("Yoshingizni kiriting:");

let toFirstName = prompt(
  "Ismingizni katta yoki kichik harfda qilishni tanlang: \n 1) Katta \n 2) Kichik"
);

if (toFirstName === "1") {
  ism.textContent = firstName.toUpperCase();
} else if (toFirstName === "2") {
  ism.textContent = firstName.toLowerCase();
} else {
  alert("1 yoki 2 qiymat kiriting");
  toFirstName = prompt(
    "Ismingizni katta yoki kichik harfda qilishni tanlang: \n 1) Katta \n 2) Kichik"
  );
  if (toFirstName === "1") {
    ism.textContent = firstName.toUpperCase();
  } else if (toFirstName === "2") {
    ism.textContent = firstName.toLowerCase();
  }
}

familiya.textContent = lastName;

yosh.textContent = age;