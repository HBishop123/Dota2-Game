
class User {
  constructor(nameOne, nameTwo, nameThree, nameFour, nameFive) {
    this.nameOne = nameOne;
    this.nameTwo = nameTwo;
    this.nameThree = nameThree;
    this.nameFour = nameFour;
    this.nameFive = nameFive;
  }
}

const getUserData = (e) => {
  e.preventDefault();
  const user = {
    nameOne: document.getElementById("nameOne").value,
    nameTwo: document.getElementById("nameTwo").value,
    nameThree: document.getElementById("nameThree").value,
    nameFour: document.getElementById("nameFour").value,
    nameFive: document.getElementById("nameFive").value,
  };

  const { nameOne, nameTwo, nameThree, nameFour, nameFive } = user;
  const result = new User(nameOne, nameTwo, nameThree, nameFour, nameFive);
  document.forms[0].reset();
  arr.push(result);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", getUserData);
});
let arr = [];
console.log(arr);
