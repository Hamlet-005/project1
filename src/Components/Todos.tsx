import { useState } from "react";
import "./Todos.css"

type Todo = {
  text: string;
  done: boolean;
};

export default function Todos() {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  const add = () => {
    setList([...list, { text, done: false }]);
    setText("");
  };

  const remove = (index: number) => {
    setList(list.filter((element, i) => i !== index));
  };

  const markDone = (index: number) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  const removeDone = () => {
    setList(list.filter((item) => !item.done));
  };

  return (
    <div className="todos-container">
      <input
      className="todos-input-container"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add} className="add-button">Add</button>
      <button onClick={removeDone} className="delete-button">Delete all done</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => markDone(index)}
            />
            <span className={item.done ? "done" : ""}>
                {item.text}
            </span>

            <button onClick={() => remove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
