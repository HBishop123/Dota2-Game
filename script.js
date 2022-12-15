
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
    nameOne: document.getElementById("name-one").value,
    nameTwo: document.getElementById("name-two").value,
    nameThree: document.getElementById("name-three").value,
    nameFour: document.getElementById("name-four").value,
    nameFive: document.getElementById("name-five").value,
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
