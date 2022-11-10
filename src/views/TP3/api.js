const url = "http://localhost:5000/users";

export const getallUsers = async () => {
    return await fetch(url).then((response) => response.json());
}

export const addUser = async (user) => {
    return await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user
    });
}

export const editUser = async (id, user) => {
    return await fetch(`${url}/${id}`, {
        method: 'POST',
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