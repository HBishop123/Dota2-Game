const userForm = document.createElement("form");
const formContainer = document.querySelector(".form-container");
formContainer.appendChild(userForm);

userForm.innerHTML =
  "<label for='input-field'>Player 1:</label><input type='text' name='name' placeholder='Meepo'/> <label for='input-field'>Player 2:</label><input type='text' name='name' placeholder='Axe'/> <label for='input-field'>Player 3:</label><input type='text' name='name' placeholder='Brood Mother'/> <label for='input-field'>Player 4:</label><input type='text' name='name' placeholder='Puck'/> <label for='input-field'>Player 5:</label><input type='text' name='name' placeholder='Earth Spirit'/>";
userForm.style.display = "grid";
userForm.style.gridTemplateColumns = "100px 170px";
userForm.style.width = "200px";
userForm.style.alignSelf = "center";
userForm.style.justifySelf = "center";
userForm.style.fontSize = "25px";
userForm.style.gap = "5px";
