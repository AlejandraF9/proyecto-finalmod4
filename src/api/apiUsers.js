const baseUrl = "https://685ed4157b57aebd2afab60a.mockapi.io/modulo4";

export async function createNewUser(user) {
  const url = `${baseUrl}/users`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        country: user.country,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}



//Editar usuario

export async function editUser(id, userData) {
  const url = `${baseUrl}/users/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        // country: userData.country,
        // favourites: userData.favourites
      })
    });

    if(!response.ok) {
      throw new Error("Error editing user");
    };

    const updatedUser = await response.json();

    console.log(updatedUser, "User updated");

  } catch (error) {
    console.error(error);
  }
};