import { useEffect, useState } from "react";
import { getallUsers } from './api';
import Button from "../../components/Button";
import UserForm from "./UserForm";
import ListContainer from "../../components/ListContainer";



export default function UserList (){
  
  function UserItem({ item, onRemove }) {
    return (
      <div>
        Prénom: {item.name} - Nom: {item.lastname} - Age: {item.age} ans - Email: {item.email}
        <Button title="Remove" onClick={onRemove} />
      </div>
    );
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getallUsers().then((data) => {
      setUsers(data);
    });
  }, [])


  return (
    <>
      <h1>Liste d'utilisateurs</h1>
      <ListContainer
        initialItems={users}
        ListItem={UserItem}
        AddForm={UserForm}
        availableActions={{
          add: true,
          remove: true,
          edit: true,
        }}
      />
    </>
  )
}
