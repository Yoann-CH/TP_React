import React, { useState, useEffect } from 'react';
import { addUser, editUser, getallUsers } from './api';

const initialValue = {
    name: "",
    lastname : "",
    age: 0,
    email: "",
}

export default function UserForm(){

    const [user, setUser] = useState(initialValue);
    const {name, lastname, age, email} = user;

    const onValueChange = (e) =>
    {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getallUsers().then((data) => {
          setUsers(data);
        });
      }, [])



    function handleSubmit() {
        for(let n of users){
            if(n.name.toLowerCase() === user.name.toLowerCase() && n.lastname.toLowerCase() === user.lastname.toLowerCase()){
                editUser(n.id,user)
                return
            }
        }
        addUser(user);
    }

    console.log(user)

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