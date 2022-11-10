import { useEffect, useState } from "react";
import { deleteUser ,getallUsers } from './api';
import EditUserForm from './UpdateUserForm';
import ListContainer from "../../components/ListContainer";



export default function UserList (){
  
  function UserItem({ item }) {
    return (
      <div>
        Prénom: {item.name} - Nom: {item.lastname} - Age: {item.age} ans - Email: {item.email}
      </div>
    );
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getallUsers().then((data) => {
      setUsers(data);
    });
  }, [])

  console.log(users)

  const deleteData = async (id) => {
      await deleteUser(id);
      getallUsers().then((data) => {
        setUsers(data);
      });
  }

  return (
    <>
      <h1>Liste d'utilisateurs</h1>
      <ListContainer
        initialItems={users}
        ListItem={UserItem}
        availableActions={{}}
      />
    </>
  )
}
