import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  const [todos, setTodos] = useState<ITodo[]>([]); //have to pass arr in the type to make it array of iTodos
  const [index, setInEdit] = useState<any>(false);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    let newTodos: ITodo[] = todos.slice();
    if (index !== false) {
      newTodos[index].text = text;
    } else {
      newTodos = [...todos, { text: text, complete: false }];
    }
    setTodos(newTodos);
    setInEdit(false);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos.slice();
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const editTodo = (text: string, i: number): void => {
    setValue(text);
    setInEdit(i);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h2'>Todo List</Typography>
      <section>
        {todos.length ? (
          <List>
            {todos.map((todo, i) => (
              <ListItem key={i}>
                <ListItemText
                  style={{
                    textDecoration: todo.complete ? "line-through" : "initial",
                  }}
                  primary={todo.text}
                />
                <Button
                  color='secondary'
                  type='button'
                  className='button'
                  onClick={() => completeTodo(i)}
                >
                  <i
                    className={`fas fa-${todo.complete ? "times" : "check"}`}
                  ></i>
                </Button>
                <Button
                  color='primary'
                  type='button'
                  className='button'
                  onClick={() => editTodo(todo.text, i)}
                >
                  <i className='fa fa-pencil'></i>
                </Button>
                <Button
                  color='default'
                  type='button'
                  className='button'
                  onClick={() => deleteTodo(i)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>You have nothing to do - woohoo!</Typography>
        )}
      </section>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <TextField
          type='text'
          style={{ width: "75%" }}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id='standard-basic'
          label='Todo'
        />
        <Button type='submit' variant='contained' color='secondary'>
          Add To List
        </Button>
      </form>
    </Container>
  );
};

export default Todo;
