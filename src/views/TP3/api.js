const url = "http://localhost:5000/users";

export const getallUsers = () => {
    return fetch(url).then((response) => response.json());
}

export const addUser = (user) => {
    return fetch(`${url}/`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: user.name,
            lastname: user.lastname,
            age: user.age,
            email: user.email
          })
    });
}

export const editUser = async (id, user) => {
    return await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user
    });
}


export const deleteUser = async (id) => {
    return await fetch(`${url}/${id}`, {
        method: 'DELETE'
      });
}