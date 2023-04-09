import React, { useState } from "react";
import List from "./List";
import "./style.css";

export default function App() {
  const [getTask, setTask] = useState("");

  // array containing of list
  const [getList, setList] = useState([]);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  // handle add button
  const handleAdd = (event) => {
    event.preventDefault();
    // const newListItem = {
    //   id: getList.length + 1,
    //   list: getTask
    // };

    // checking if getTask is have empty string or not
    // if it does not have an empty string then only add button will be functional else dont do anything

    if (getTask !== "") {
      const newListItem = getTask;
      // setList([...getList, newListItem]);
      setList((preValue) => {
        return [...preValue, newListItem];
      });
      setTask("");
    }
  };

  // delete item from array
  const deleteItem = (id) => {
    setList((oldArray) => {
      return oldArray.filter((currentItem, itemIndex) => {
        return itemIndex !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Task</h1>

        <form onSubmit={handleAdd}>
          <input
            type="text"
            name="todo"
            placeholder="Create a task..."
            autoComplete="off"
            value={getTask}
            onChange={handleInput}
          />
          <button type="submit">Create</button>
        </form>
        {getList.length === 0 ? (
          <p className="no-task">No tasks have been created yet :(</p>
        ) : (
          <div className="show-list">
            {getList.map((currentValue, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  itemData={currentValue}
                  onSelect={deleteItem}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
