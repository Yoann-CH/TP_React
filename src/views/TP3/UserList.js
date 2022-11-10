import { useEffect, useState } from "react";
import { deleteUser ,getallUsers } from './api';
import EditUserForm from './UpdateUserForm';

export default function UserList (){

  const [users, setUsers] = useState([]);

  useEffect(() => {
      getUsers();
  }, [])

  const getUsers = async () =>{
      const response = await getallUsers();
      setUsers(response.data);
  }

  const deleteData = async (id) => {
      await deleteUser(id);
      getUsers();
  }

  let edit = false;

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
       {
        users.map((user) =>{
          <li id={user.id}>Nom: {user.lastname} Prénom: {user.name} Age: {user.age} Mail : {user.email} <button onClick={edit = true}>Modifier</button> <button onClick={() => deleteData(data.id)}>Supprimer</button></li>
        })
        }
        { edit == true &&(
          <EditUserForm></EditUserForm>
        )
        }
      
    </div>
  )
}
