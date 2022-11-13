import React, { useState } from 'react';
import { addUser, editUser } from './api';

const initialValue = {
    name: "",
    lastname : "",
    age: 0,
    email: "",
}

export default function UserForm({users, onAdd, onUpdate}){

    const [user, setUser] = useState(initialValue);
    const {name, lastname, age, email} = user;

    const onValueChange = (e) =>
    {
        setUser({...user, [e.target.name]: e.target.value});
    }


    function handleSubmit(e) {
        e.preventDefault();
        for(let n of users){
            if(n.name.toLowerCase() === user.name.toLowerCase() && n.lastname.toLowerCase() === user.lastname.toLowerCase()){
                editUser(n.id,user);
                onUpdate(user);
                return;
            }
        }
        addUser(user);
        onAdd({
            name: user.name,
            lastname: user.lastname,
            age: user.age,
            email: user.email,
            id: users.length + 1
          });
    }


    return (
        <div>
            <h1>Formulaire utilisateur:</h1>
            <p>Créer ou modifier un utilisateur</p>
            <form onSubmit={handleSubmit}>
                <label for="name">Prénom</label>
                <input name="name" onChange={(e) => onValueChange(e)} value={name}></input>
                <label for="lastname">Nom</label>
                <input name="lastname" onChange={(e) => onValueChange(e)} value={lastname}></input>
                <label for="age">Age</label>
                <input type="number" name="age" onChange={(e) => onValueChange(e)} value={age}></input>
                <label for="email">Email</label>
                <input name="email" onChange={(e) => onValueChange(e)} value={email}></input>
                <input type="submit" value="Envoyer"></input>
            </form>   
        </div>
    )
}