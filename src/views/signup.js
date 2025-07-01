import { createNewUser } from "../api/apiUsers";
import { dataValidations } from "../utils/utils";


const container = document.getElementById ("app");
const newUserdiv = document.createElement ("div");
newUserdiv.classList.add ("divNewUser");
container.appendChild(newUserdiv);
newUserdiv.innerHTML =`
<form id = "divNewUserForm">
    <h2 id="registerFormH2">Register form</h2>
    <input type="text" id="registerFormName" placeholder="Name" required>
    <input type="email" id="registerFormEmail" placeholder="Email" required>
    <input type="password" id="registerFormPassword" placeholder="Password" required>
    <input type="password" id="registerFormRepPassword" placeholder = "Repeat password" required>
    <input type="text" id="registerFormIsland" placeholder="Island">
    <button type="submit">Sign up</button>
</form>`

const formNewuser = document.getElementById("divNewUserForm")

formNewuser.addEventListener ("submit", async (event) => {
    event.preventDefault();
    const signupName = document.getElementById("registerFormName").value.trim();
    const signupEmail = document.getElementById("registerFormEmail").value.trim();
    const signupPassword = document.getElementById("registerFormPassword").value.trim();
    const signupRepPassword = document.getElementById("registerFormRepPassword").value.trim();
    const signupIsland = document.getElementById("registerFormIsland").value.trim();

    const validations = dataValidations({name: signupName, email: signupEmail, password: signupPassword});
    
    if(validations) {
      const userData = {
      name,
      email,
      password,
    };

   await createNewUser(userData);
}
})

