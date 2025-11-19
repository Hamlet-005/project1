import { useState } from "react";

type Todo = {
  text: string;
  done: boolean;
};

export default function Todos() {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  const add = () => {
    if (text.trim() === "") return;
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
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <button onClick={removeDone}>Delete all done</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => markDone(index)}
            />
            {item.text}
            <button onClick={() => remove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
