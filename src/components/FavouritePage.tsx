import React from "react";

import { Store } from "../Store";
import { IEpisode } from "../interfaces";
import { toggleFavAction } from "../Actions";

import Episode from "./Episode";

import { Typography } from "@material-ui/core";

const FavouritePage = () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <section>
      <Typography variant='h3'>My Favourites</Typography>
      <section className='flex-container'>
        {state.favourites.length ? (
          state.favourites.map((episode: IEpisode) => (
            <Episode
              key={episode.id}
              episode={episode}
              toggleFavAction={() => toggleFavAction(state, dispatch, episode)}
              favourites={state.favourites}
            />
          ))
        ) : (
          <Typography style={{ textAlign: "center" }}>
            You have no favourites
          </Typography>
        )}
      </section>
    </section>
  );
};

export default FavouritePage;
