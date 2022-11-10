import React, { useState } from 'react';
import { addUser } from './api';

const initialValue = {
    name: "",
    username : "",
    age: 0,
    email: "",
}

export default function AddUserForm(){

    const [user, setUser] = useState(initialValue);
    const {name, lastname, age, email} = user;

    const onValueChange = (e) =>
    {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        addUser(user);
    }

    return (
        <div>
            <h1>Création d'utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Prénom</label>
                <input name="name" onChange={(e) => onValueChange(e)} value={name}></input>
                <label for="lastname">Nom</label>
                <input name="lastname" onChange={(e) => onValueChange(e)} value={lastname}></input>
                <label for="age">Age</label>
                <input name="age" onChange={(e) => onValueChange(e)} value={age}></input>
                <label for="email">Prénom</label>
                <input name="email" onChange={(e) => onValueChange(e)} value={email}></input>
                <input type="submit" value="Créer"></input>
            </form>   
        </div>
    )
}