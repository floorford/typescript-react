import React from "react";
import { Link } from "@reach/router";

import Typography from "@material-ui/core/Typography";

const App = (props: any): JSX.Element => {
  return (
    <main>
      <nav>
        <Typography>
          <Link to='/todo'>Todo</Link>
        </Typography>
        <Typography>
          <Link to='/rickandmorty'>Rick and Morty App</Link>
        </Typography>
      </nav>
      {props.children}
    </main>
  );
};

export default App;
