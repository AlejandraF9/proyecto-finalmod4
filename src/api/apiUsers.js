const baseUrl = "https://685ed4157b57aebd2afab60a.mockapi.io/modulo4/users"


async function getUsers() {
    const url = `${baseUrl}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error en la petición getUsers")
        }
        const allUsers = await response.json();
        console.log(allUsers); 
        userList(allUsers);
        return allUsers;
    } catch (error) {
        console.error("Error")
    }
}

