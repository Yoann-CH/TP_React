import { useEffect, useState } from "react";
import { deleteUser } from "../views/TP3/api";
import { getallUsers } from "../views/TP3/api";

export default function ListContainer({
  initialItems = [],
  availableActions = {
    add: true,
    remove: true,
    edit: true,
  },
  ListItem,
  AddForm,
  keyProp = "id",
}) {
  const [items, setItems] = useState(initialItems);
  const listeners = {};
  if (availableActions.add) {
    listeners.add = function (newItem) {
      setItems([...items, newItem]);
    };
  }
  if (availableActions.remove) {
    listeners.remove = function () {
      setItems(items.filter((item) => item[keyProp] !== this[keyProp]));
      deleteUser(this[keyProp]);
    };
  }

  if (availableActions.edit) {
    listeners.edit = function (editedItem) {
      setItems(
        items.map((item) => {
          if (item.name.toLowerCase() === editedItem.name.toLowerCase() && item.lastname.toLowerCase() === editedItem.lastname.toLowerCase()) {
            return {
              name: editedItem.name,
              lastname: editedItem.lastname,
              age: editedItem.age,
              email: editedItem.email,
              id:item.id 
            };
          }
          return item;
        })
      );
    };
  }

  useEffect(() => {
    getallUsers().then((data) => {
      setItems(data);
    });
  }, [])

  return (
    <>
      {items.map(
        (item) =>
          console.log(item, item[keyProp]) || (
            <ListItem
              key={item[keyProp]}
              item={item}
              onEdit={listeners.edit?.bind(item)}
              onRemove={listeners.remove?.bind(item)}
            />
          )
      )}
      {availableActions.add && <AddForm onAdd={listeners.add} onUpdate={listeners.edit} users={items}  />}
    </>
  );
}
