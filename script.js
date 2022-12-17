// array of objects for players
playerArray = [];

class User {
  constructor(nameOne, hero, role) {
    this.nameOne = nameOne;
    this.hero = hero;
    this.role = role;
  }
}

const getUserData = (e) => {
  e.preventDefault();

  const userArr = [];
  const firstPlayer = document.getElementById("name-one").value;
  userArr.push(firstPlayer);
  const secondPlayer = document.getElementById("name-two").value;
  userArr.push(secondPlayer);
  const thirdPlayer = document.getElementById("name-three").value;
  userArr.push(thirdPlayer);
  const fourthPlayer = document.getElementById("name-four").value;
  userArr.push(fourthPlayer);
  const fifthPlayer = document.getElementById("name-five").value;
  userArr.push(fifthPlayer);

  for (i = 0; i < userArr.length; i++) {
    if (userArr[i] === "") {
    } else if (userArr[i] !== "") {
      const playerName = new User(userArr[i]);
      playerArray.push(playerName);
    }
  }
  document.forms[0].reset();
  document.querySelector(".form-container").style.display = "none";
};

// add event listener for form button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", getUserData);
});

console.log(playerArray);
