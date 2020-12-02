import React, { Fragment, useState } from "react";

// you can assign longer types w/ generics (this bit <>) to type style vars to save on boilerplate
// types must reference pre-existing types
type FormElem = React.FormEvent<HTMLFormElement>;

// an interface lets you create types
// you can extend interfaces with the extends keyword!
interface ITodo {
  text: string;
  complete: boolean;
}

const Todo = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]); //have to pass arr in the type to make it array of objects

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text: text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <section>
        {todos.length ? (
          <ul>
            {todos.map((todo, i) => (
              <li key={i}>{todo.text}</li>
            ))}
          </ul>
        ) : (
          <p>You have nothing to do - woohoo!</p>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
};

export default Todo;
