// array of objects for players
playerArray = [];

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

function createPlayerDisplay() {
  const playerDisplay = document.querySelector("main");
  for (i = 0; i < playerArray.length; i++) {
    const card = document.createElement("div");
    card.style.backgroundColor = "blue";
    card.style.height = "250px";
    card.style.width = "250px";
    playerDisplay.appendChild(card);
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

function selectHero() {
  const heroNames = [
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
  ];
  const heroSelector = Math.floor(Math.random() * heroNames.length);
  const hero = heroNames[heroSelector];
  heroNames.splice(heroSelector, 1);
  return hero;
}
const hero = selectHero();
console.log(hero);

// create new div for card container and make responsive.
