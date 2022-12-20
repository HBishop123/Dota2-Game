// array of objects for players
playerArray = [];
console.log(playerArray);

// object containing the arrays of hero names and roles to choose from
const heroAndRoles = {
  heroNames: [
    "Abaddon",
    "Alchemist",
    "Axe",
    "Beastmaster",
    "Brewmaster",
    "Bristleback",
    "Centaur Warrunner",
    "Chaos Knight",
    "Clockwerk",
    "Dawnbreaker",
    "Doom",
    "Dragon Knight",
    "Earth Spirit",
    "Earthshaker",
    "Elder Titan",
    "Huskar",
    "Io",
    "Kunkka",
    "Legion Commander",
    "Lifestealer",
    "Lycan",
    "Magnus",
    "Marci",
    "Mars",
    "Night Stalker",
    "Omniknight",
    "Phoenix",
    "Primal Beast",
    "Pudge",
    "Sand King",
    "Slardar",
    "Snapfire",
    "Spirit Breaker",
    "Sven",
    "Tidehunter",
    "Timbersaw",
    "Tiny",
    "Treant Protector",
    "Tusk",
    "Underlord",
    "Undying",
    "Wraith King",
    "Anti-Mage",
    "Arc Warden",
    "Bloodseeker",
    "Bounty Hunter",
    "Broodmother",
    "Clinkz",
    "Drow Ranger",
    "Ember Spirit",
    "Faceless void",
    "Gyrocopter",
    "Hoodwink",
    "Juggernaut",
    "Lone Druid",
    "Luna",
    "Medusa",
    "Meepo",
    "Mirana",
    "Monkey King",
    "Morphling",
    "Naga Siren",
    "Nyx Assassin",
    "Pangolier",
    "Phantom Assassin",
    "Phantom Lancer",
    "Razor",
    "Riki",
    "Shadow Fiend",
    "Slark",
    "Sniper",
    "Spectre",
    "Templar Assassin",
    "Terrorblade",
    "Troll Warlord",
    "Ursa",
    "Vengeful Spirit",
    "Venomancer",
    "Viper",
    "Weaver",
    "Ancient Apparition",
    "Bane",
    "Batrider",
    "Chen",
    "Crystal Maiden",
    "Dark Seer",
    "Dark Willow",
    "Dazzle",
    "Death Prophet",
    "Disruptor",
    "Enchantress",
    "Enigma",
    "Grimstroke",
    "Invoker",
    "Jakiro",
    "Keeper of the Light",
    "Leshrac",
    "Lich",
    "Lina",
    "Lion",
    "Natures Prophet",
    "Necrophos",
    "Ogre Magi",
    "Oracle",
    "Outworld Devourer",
    "Puck",
    "Pugna",
    "Queen of Pain",
    "Rubick",
    "Shadow Demon",
    "Shadow Shaman",
    "Silencer",
    "Skywrath Mage",
    "Storm Spirit",
    "Techies",
    "Tinker",
    "Visage",
    "Void Spirit",
    "Warlock",
    "Windranger",
    "Winter Wyvern",
    "Witch Doctor",
    "Zeus",
  ],
  roles: ["Midlane", "Safelane", "Position 5", "Position 4", "Offlane"],
};

// Constructor for plsyer info
class User {
  constructor(playerName, hero, role) {
    this.playerName = playerName;
    this.hero = hero;
    this.role = role;
  }
}

// function that is used on the 'click' event listener on the submit button.
const getUserData = () => {
  // pushes each value of the form to the userArr array
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

  // loops over the array, selecting only those that arent empty strings
  // creating the players object and pushing that object to an array of objects
  for (i = 0; i < userArr.length; i++) {
    if (userArr[i] === "") {
    } else if (userArr[i] !== "") {
      const playerName = new User(userArr[i]);
      playerArray.push(playerName);
    }
  }
  // resets the form
  document.forms[0].reset();
  // if statement to not allow closing of the form if all inputs are left empty
  if (
    firstPlayer === "" &&
    secondPlayer === "" &&
    thirdPlayer === "" &&
    fourthPlayer === "" &&
    fifthPlayer === ""
  ) {
    document.querySelector(".form-container").style.display = "block";
  } else {
    // form disappears if there is input in the forms
    document.querySelector(".form-container").style.display = "none";
  }
};

// creates the cards that player info sits on by looping through the playerArray, the card id's scale with [i]
function createPlayerDisplay() {
  const playerDisplay = document.querySelector("main");
  for (i = 0; i < playerArray.length; i++) {
    const card = document.createElement("div");
    card.id = `div${i}`;
    card.classList.add("card");
    card.style.backgroundColor = "blue";
    card.style.height = "250px";
    card.style.width = "500px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.paddingBottom = "5px";
    card.style.boxShadow = "0px 6px 5px 0px rgba(0, 0, 0, 0.75)";
    card.style.position = "relative";
    card.style.gap = "10px";
    playerDisplay.appendChild(card);

    // appends a button to each card, which scales in ID due to the loop [i]
    const randomButton = document.createElement("button");
    randomButton.id = `button${i}`;
    randomButton.classList.add("randomButton");
    randomButton.innerHTML = "Randomise Hero";
    randomButton.style.alignSelf = "center";
    randomButton.style.borderRadius = "20px";
    randomButton.style.padding = "5px";
    randomButton.style.border = "4px solid #a72714";
    randomButton.style.position = "absolute";
    randomButton.style.top = "78%";
    randomButton.style.backgroundColor = "azure";
    card.appendChild(randomButton);

    // appends the players name to top of the card
    let playerName = document.createElement("p");
    playerName.style.alignSelf = "center";
    playerName.innerHTML = playerArray[i].playerName;
    card.appendChild(playerName);
  }
}

// add event listener for form button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    getUserData();
    createPlayerDisplay();
  });
});

// randomly chooses a dota2 hero and removes it from the pool until game is completely reset
function selectHero() {
  const heroSelector = Math.floor(
    Math.random() * heroAndRoles.heroNames.length
  );
  const hero = heroAndRoles.heroNames[heroSelector];
  heroAndRoles.heroNames.splice(heroSelector, 1);
  return hero;
}

// randomly select a role and removes it from the pool
function selectRole() {
  const roleSelector = Math.floor(Math.random() * heroAndRoles.roles.length);
  const role = heroAndRoles.roles[roleSelector];
  heroAndRoles.roles.splice(roleSelector, 1);
  return role;
}
console.log(selectRole());
console.log(selectRole());
console.log(selectRole());
console.log(selectRole());
console.log(selectRole());
// click event which appends hero choice to the card, pushes that hero choice to the playerArray, and changes the innerHTML of the button to choose role
document.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.parentNode;

  function appendHero() {
    const parentDiv = target.parentNode;
    const heroText = document.createElement("p");
    heroText.classList.add("animated");
    heroText.style.alignSelf = "center";
    heroText.style.fontSize = "30px";
    heroText.style.fontWeight = "1000";

    heroText.innerText = `${selectHero()}`;
    heroText.id = heroText.innerText;
    parentDiv.appendChild(heroText);
  }

  switch (target) {
    case document.getElementById("button0"):
      appendHero();
      target.style.opacity = "0";
      playerArray[0].hero = card.querySelector(":nth-child(3)").id;
      target.id = "buttonRole0";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button1"):
      appendHero();
      target.style.opacity = "0";
      playerArray[1].hero = card.querySelector(":nth-child(3)").id;
      target.id = "buttonRole1";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button2"):
      appendHero();
      target.style.opacity = "0";
      playerArray[2].hero = card.querySelector(":nth-child(3)").id;
      target.id = "buttonRole2";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button3"):
      appendHero();
      target.style.opacity = "0";
      playerArray[3].hero = card.querySelector(":nth-child(3)").id;
      target.id = "buttonRole3";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button4"):
      appendHero();
      target.style.opacity = "0";
      target.id = "buttonRole4";
      playerArray[4].hero = card.querySelector(":nth-child(3)").id;
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;
    default:
  }
});

// click event to append the role to player card
document.addEventListener("click", (e) => {
  const target = e.target;
  function appendRole() {
    const parentDiv = target.parentNode;
    const roleText = document.createElement("p");
    roleText.style.alignSelf = "center";
    roleText.style.fontSize = "30px";
    roleText.style.fontWeight = "1000";
    roleText.classList.add("animated");

    roleText.innerText = `${selectRole()}`;
    parentDiv.appendChild(roleText);
  }
});
