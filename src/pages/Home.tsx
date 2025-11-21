import Counter from "../Components/Counter";
import Todos from "../Components/Todos";

export default function Home() {
    return (
      <div>
        <h1>Counter section</h1>
        <Counter/>
        <h1>Todo section</h1>
        <Todos/>
      </div>
    );
  }
  