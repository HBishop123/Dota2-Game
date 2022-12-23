// array of objects for players
playerArray = [];
console.log(playerArray);

// object containing the arrays of hero names and roles to choose from
const heroAndRolesAndChallengesAndDrinks = {
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
  roles: ["Midlane", "Safelane", "Hard Support", "Soft Support", "Offlane"],
  challenges: [
    "Have the highest kill count in the team.",
    "Have the least amount of deaths in the team",
    "Have the highest networth in the team",
    "Achieve 400 last hits",
    "Achieve 500 last hits",
    "Achieve 600 last hits",
    "Achieve 800 last hits",
    "End the game deathless",
    "After every kill, BM the enemy (each failure = the designated amount of drinks for forfeit)",
    "After every death of yours, all chat why it was actually because of a bug (each failure = the designated amount of drinks for forfeit)",
    "Have the highest tower damage",
    "After every kill of yours, type 'skill issue' in all chat (each failure = the designated amount of drinks for forfeit)",
    "After every death, queue a song (each failure = the designated amount of drinks for forfeit)",
    "Buy smokes every time they're available in the shop (can only fail once)",
    "For an enemy you killed place either a Sentry or an Observer on an enemies death location (each failure = the designated amount of drinks for forfeit)",
    "After each deward, quote Family Guy (each failure = the designated amount of drinks for forfeit)",
    "Lucky or Unlucky? Deny a teammates once. If you succeed, give out 5x the reward amount",
    "Lucked out: You can switch roles with a teammate (If taken, must drink both reward and forfeit combined)",
    "Lucked out: you can switch heroes with a teammate (If taken, must drink both reward and forfeit combined)",
    "Build Dagon 2 as your first 'big' item",
    "Build Atos as your first 'big' item",
    "Build Radiance as your first 'big' item",
    "Secret Agent: You must smoke into the enemy fountain, and place an item of your choosing in the fountain (Being detected = failure, you only have once chance)",
    "The Arteezy: Cliff an enemy at some point during the game",
    "End the game with over 50 denies",
    "End the game with over 75 denies",
    "End the game with over 100 denies",
    "Ward a cliff with any neutral creep",
    "Taking Rosh Home: Finish the game with the Aegis in your inventory",
    "Cheese Connoisseur: Finish the game with the Cheese in your inventory",
    "Accent man: Pick an accent, it must change each time you die (each failure = the designated amount of drinks for forfeit)",
    "Pet Lover: You must have a neutral creep follow you around, if it dies, you drink the forfeit. If it lives the whole game, give out 3x the reward (helm must be acquired before 20 minutes or you forfeit)",
    "Team Tower Killer: For each tower you deny, you can give out a set of reward drinks. If you dont deny a single tower, you forfeit",
    "Maximise Suffering: Build your hero in a way that it will annoy the enemies as much as possible - your teammates will decide if you're successful",
    "Buy a Rapier & keep it all game. Not buying one OR losing it & not retrieving it = forfeit",
    "GPM must be over 500",
    "GPM must be over 600",
    "GPM must be over 700",
    "GPM must be over 400",
  ],
  drinkAmounts: [
    "5 sips",
    "6 sips",
    "7 sips",
    "8 sips",
    "9 sips",
    "10 sips",
    "11 sips",
    "12 sips",
    "13 sips",
    "14 sips",
    "15 sips",
    "16 sips",
    "17 sips",
    "69 sips",
    "1 shot",
    "2 shots",
    "3 shots",
    "DOWN IT ALL!",
  ],
};
console.log(heroAndRolesAndChallengesAndDrinks.heroNames);
// Constructor for player info
class User {
  constructor(playerName, hero, role, challenge, reward, forfeit) {
    this.playerName = playerName;
    this.hero = hero;
    this.role = role;
    this.challenge = challenge;
    this.reward = reward;
    this.forfeit = forfeit;
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
    card.style.backgroundColor = "rgb(211,211,211)";
    // card.style.width = "450px";
    card.style.minHeight = "300px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.padding = "0px 5px 5px 5px";
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

// RANDOMISE FUNCTIONS -----------------------------------------------------------------

// randomly chooses a dota2 hero and removes it from the pool until game is completely reset
function selectHero() {
  const heroSelector = Math.floor(
    Math.random() * heroAndRolesAndChallengesAndDrinks.heroNames.length
  );
  const hero = heroAndRolesAndChallengesAndDrinks.heroNames[heroSelector];
  heroAndRolesAndChallengesAndDrinks.heroNames.splice(heroSelector, 1);
  return hero;
}

// randomly select a role and removes it from the pool
function selectRole() {
  const roleSelector = Math.floor(
    Math.random() * heroAndRolesAndChallengesAndDrinks.roles.length
  );
  const role = heroAndRolesAndChallengesAndDrinks.roles[roleSelector];
  heroAndRolesAndChallengesAndDrinks.roles.splice(roleSelector, 1);
  return role;
}

// randomly select a challenge, does not remove from pool
function selectChallenge() {
  const challengeSelector = Math.floor(
    Math.random() * heroAndRolesAndChallengesAndDrinks.challenges.length
  );
  const challenge =
    heroAndRolesAndChallengesAndDrinks.challenges[challengeSelector];
  return challenge;
}

// randomly chooses a drink forfeit or reward
function selectDrinkAmount() {
  const drinkAmountSelector = Math.floor(
    Math.random() * heroAndRolesAndChallengesAndDrinks.drinkAmounts.length
  );
  const drinkAmount =
    heroAndRolesAndChallengesAndDrinks.drinkAmounts[drinkAmountSelector];
  return drinkAmount;
}

// RANDOMISE FUNCTIONS END -----------------------------------------------------------------

// click event which appends hero choice to the card, pushes that hero choice to the playerArray, and changes the innerHTML of the button to choose role
// As well as created a randomise hero button
document.addEventListener("click", (e) => {
  const heroArr = [];
  const { target } = e;
  const card = target.parentNode;

  function appendHero() {
    const parentDiv = target.parentNode;

    const heroButtonContainer = document.createElement("div");
    heroButtonContainer.id = "heroButtonContainer";
    heroButtonContainer.style.display = "flex";
    heroButtonContainer.style.flexDirection = "row";
    heroButtonContainer.style.justifyContent = "center";
    heroButtonContainer.style.gap = "15px";

    parentDiv.appendChild(heroButtonContainer);

    const heroText = document.createElement("p");
    heroText.classList.add("animated");
    heroText.style.fontSize = "30px";
    heroText.style.fontWeight = "1000";
    heroText.innerText = `${selectHero()}`;
    heroText.id = heroText.innerHTML;
    heroButtonContainer.appendChild(heroText);

    const changeHero = document.createElement("button");
    changeHero.id = "changeHero";
    changeHero.classList.add("animated");

    const refresh = document.createElement("img");
    refresh.id = "spinImage";
    refresh.src = "logos/refreshL.png";
    changeHero.appendChild(refresh);

    changeHero.style.width = "40px";
    changeHero.style.height = "40px";
    changeHero.style.borderRadius = "50%";
    changeHero.style.border = "none";
    changeHero.style.backgroundColor = "rgb(211,211,211)";
    heroButtonContainer.appendChild(changeHero);
    return heroText.innerText;
  }

  switch (target) {
    case document.getElementById("button0"):
      playerArray[0].hero = appendHero();
      target.style.opacity = "0";
      target.id = "buttonRole0";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button1"):
      playerArray[1].hero = appendHero();
      target.style.opacity = "0";
      target.id = "buttonRole1";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button2"):
      target.style.opacity = "0";
      playerArray[2].hero = appendHero();
      target.id = "buttonRole2";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button3"):
      target.style.opacity = "0";
      playerArray[3].hero = appendHero();
      target.id = "buttonRole3";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Role";
      }, 1500);
      break;

    case document.getElementById("button4"):
      target.style.opacity = "0";
      playerArray[4].hero = appendHero();
      target.id = "buttonRole4";
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
  const { target } = e;
  const parentDiv = target.parentNode;

  function appendRole() {
    const roleText = document.createElement("p");
    roleText.style.alignSelf = "center";
    roleText.style.fontSize = "30px";
    roleText.style.fontWeight = "1000";
    roleText.classList.add("animated");

    roleText.innerText = `${selectRole()}`;
    parentDiv.appendChild(roleText);
  }
  switch (target.innerHTML) {
    case "Randomise Role":
      appendRole();
      target.style.opacity = "0";
      // pointer events stops the ability to spam the role button as its fading to become the challenge InnerText (was bug)
      target.style.pointerEvents = "none";
      setTimeout(() => {
        target.style.opacity = "1";
        target.innerHTML = "Randomise Challenge";
        target.style.pointerEvents = "auto";
      }, 1500);
      if (parentDiv.id === "div0") {
        playerArray[0].role =
          parentDiv.querySelector(":nth-child(4)").innerHTML;
      } else if (parentDiv.id === "div1") {
        playerArray[1].role =
          parentDiv.querySelector(":nth-child(4)").innerHTML;
      } else if (parentDiv.id === "div2") {
        playerArray[2].role =
          parentDiv.querySelector(":nth-child(4)").innerHTML;
      } else if (parentDiv.id === "div3") {
        playerArray[3].role =
          parentDiv.querySelector(":nth-child(4)").innerHTML;
      } else if (parentDiv.id === "div4") {
        playerArray[4].role =
          parentDiv.querySelector(":nth-child(4)").innerHTML;
      }
      break;
    default:
  }
});

// click event to append the challenge and select the drink amounts to player card
document.addEventListener("click", (e) => {
  const { target } = e;
  const parentDiv = target.parentNode;

  function appendChallenge() {
    const challengeText = document.createElement("p");
    challengeText.style.alignSelf = "center";
    challengeText.style.fontSize = "30px";
    challengeText.style.fontWeight = "1000";
    challengeText.classList.add("animated");

    challengeText.innerText = `${selectChallenge()}`;
    parentDiv.appendChild(challengeText);
  }

  function appendDrinks() {
    const drinkRewardText = document.createElement("p");

    drinkRewardText.style.alignSelf = "center";
    drinkRewardText.style.fontSize = "30px";
    drinkRewardText.style.fontWeight = "1000";
    drinkRewardText.style.marginTop = "15px";
    drinkRewardText.classList.add("animated");
    drinkRewardText.innerText = `Reward Amount = ${selectDrinkAmount()}`;
    parentDiv.appendChild(drinkRewardText);

    const drinkForfeitText = document.createElement("p");
    drinkForfeitText.style.alignSelf = "center";
    drinkForfeitText.style.fontSize = "30px";
    drinkForfeitText.style.fontWeight = "1000";
    drinkForfeitText.classList.add("animated");
    drinkForfeitText.innerText = `Forfeit Amount = ${selectDrinkAmount()}`;
    parentDiv.appendChild(drinkForfeitText);
  }
  // appends the challenges and drink amounts to the card, also pushes the challenge, reward and forfeits to the array of objects
  switch (target.innerHTML) {
    case "Randomise Challenge":
      (() => {
        appendChallenge();
        appendDrinks();
      })();
      target.style.pointerEvents = "none";
      setTimeout(() => {
        target.style.opacity = "0";
        target.style.display = "none";
      }, 1000);
      if (parentDiv.id === "div0") {
        playerArray[0].challenge =
          parentDiv.querySelector(":nth-child(5)").innerHTML;
        playerArray[0].reward =
          parentDiv.querySelector(":nth-child(6)").innerHTML;
        playerArray[0].forfeit =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
      } else if (parentDiv.id === "div1") {
        playerArray[1].challenge =
          parentDiv.querySelector(":nth-child(5)").innerHTML;
        playerArray[1].reward =
          parentDiv.querySelector(":nth-child(6)").innerHTML;
        playerArray[1].forfeit =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
      } else if (parentDiv.id === "div2") {
        playerArray[2].challenge =
          parentDiv.querySelector(":nth-child(5)").innerHTML;
        playerArray[2].reward =
          parentDiv.querySelector(":nth-child(6)").innerHTML;
        playerArray[2].forfeit =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
      } else if (parentDiv.id === "div3") {
        playerArray[3].challenge =
          parentDiv.querySelector(":nth-child(5)").innerHTML;
        playerArray[3].reward =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
        playerArray[3].forfeit =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
      } else if (parentDiv.id === "div4") {
        playerArray[4].challenge =
          parentDiv.querySelector(":nth-child(5)").innerHTML;
        playerArray[4].reward =
          parentDiv.querySelector(":nth-child(6)").innerHTML;
        playerArray[4].forfeit =
          parentDiv.querySelector(":nth-child(7)").innerHTML;
      }
      break;
    default:
  }
});

// hero re-roll function, removed hero from hero object, returns it to original array and selects a new hero
document.addEventListener("click", (e) => {
  const { target } = e;
  const parentDiv = target.parentNode.parentNode;
  const heroLocation = parentDiv.querySelector(":nth-child(3) > :nth-child(1)");

  function reRollHero() {
    setTimeout(() => {
      heroLocation.innerHTML = "";
      heroLocation.innerHTML = selectHero();
      heroLocation.id = heroLocation.innerHTML;

      if (parentDiv.parentNode.id === "div0") {
        heroAndRolesAndChallengesAndDrinks.heroNames.push(playerArray[0].hero);
        playerArray[0].hero = heroLocation.id;
      } else if (parentDiv.parentNode.id === "div1") {
        heroAndRolesAndChallengesAndDrinks.heroNames.push(playerArray[1].hero);
        playerArray[1].hero = heroLocation.id;
      } else if (parentDiv.parentNode.id === "div2") {
        heroAndRolesAndChallengesAndDrinks.heroNames.push(playerArray[2].hero);
        playerArray[2].hero = heroLocation.id;
      } else if (parentDiv.parentNode.id === "div3") {
        heroAndRolesAndChallengesAndDrinks.heroNames.push(playerArray[3].hero);
        playerArray[3].hero = heroLocation.id;
      } else if (parentDiv.parentNode.id === "div4") {
        heroAndRolesAndChallengesAndDrinks.heroNames.push(playerArray[4].hero);
        playerArray[4].hero = heroLocation.id;
      }
    }, 1000);
  }
  switch (target.id) {
    case "spinImage":
      reRollHero();
      break;
    default:
  }
});
