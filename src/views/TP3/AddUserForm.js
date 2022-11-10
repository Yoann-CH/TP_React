import React, { useState, useEffect } from 'react';
import { addUser } from './api';

const initialValue = {
    name: "",
    lastname : "",
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

    console.log(user)

    return (
        <div>
            <h1>Création d'utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Prénom</label>
                <input name="name" onChange={(e) => onValueChange(e)} value={name}></input>
                <label for="lastname">Nom</label>
                <input name="lastname" onChange={(e) => onValueChange(e)} value={lastname}></input>
                <label for="age">Age</label>
                <input type="number" name="age" onChange={(e) => onValueChange(e)} value={age}></input>
                <label for="email">Email</label>
                <input name="email" onChange={(e) => onValueChange(e)} value={email}></input>
                <input type="submit" value="Créer"></input>
            </form>   
        </div>
    )
}