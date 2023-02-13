import { useState } from "react";
export default function App() {
  const [item, setItems] = useState("");
  const [list, setLists] = useState([]);
  const [editItems, setEditItems] = useState("");
  const changeHandler = (event) => {
    setItems(event.target.value);
  };
  const addHandler = () => {
    if (editItems === "") {
      setLists([...list, { todo: item, id: Math.random() * 1000 }]);
      setItems("");
    } else {
      setLists(
        list.map((element) => {
          if (element.id === editItems) {
            return { ...element, todo: item };
          }
          return element;
        })
      );
    }
  };
  const deleteHandler = (id) => {
    setLists(list.filter((item) => item.id !== id));
  };
  const editHandler = (it) => {
    setItems(it.todo);
    const editItemss = list.find((edittask) => {
      return edittask.id === it.id;
    });
    setEditItems(editItemss.id);
  };
  console.log(item);
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} value={item} />
      <button onClick={addHandler}>Add</button>
      {list.map((it) => {
        return (
          <div>
            {it.todo}
            <button onClick={() => editHandler(it)}>Edit</button>
            <button onClick={() => deleteHandler(it.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
