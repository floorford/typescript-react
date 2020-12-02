import React, { Fragment, useState } from "react";

const App = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
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

export default App;
