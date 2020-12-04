import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

import { Store } from "../Store";
import { IEpisode } from "../interfaces";
import { fetchDataAction, toggleFavAction } from "../Actions";

import Episode from "./Episode";

const RickMorty = () => {
  // [value, function to change value]
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    !state.episodes.length && fetchDataAction(dispatch);
  });

  return (
    <section>
      <Typography variant='h3'>Rick and Morty Episode Picker</Typography>
      <Typography variant='h5' style={{ textAlign: "center" }}>
        Pick your favourite episode!
      </Typography>

      <nav>
        <Typography>
          <Link to='/favourites'>See My Favourites</Link>
        </Typography>
      </nav>
      <section className='flex-container'>
        {state
          ? state.episodes.map((episode: IEpisode) => (
              <Episode
                key={episode.id}
                episode={episode}
                toggleFavAction={() =>
                  toggleFavAction(state, dispatch, episode)
                }
                favourites={state.favourites}
              />
            ))
          : "Loading..."}
      </section>
    </section>
  );
};

export default RickMorty;
