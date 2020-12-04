import React from "react";
import Typography from "@material-ui/core/Typography";

import { Store } from "../Store";
import { url } from "../api";
import { IEpisode, IAction } from "../interfaces";

import Episode from "./Episode";

const RickMorty = () => {
  // [value, function to change value]
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    !state.episodes.length && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const data = await fetch(url);
    const json = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: json._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (ep: IEpisode) => ep.id !== episode.id
      );

      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };

  return (
    <section>
      <Typography variant='h3'>Rick and Morty Episode Picker</Typography>
      <Typography variant='h5' style={{ textAlign: "center" }}>
        Pick your favourite episode!
      </Typography>

      <section className='flex-container'>
        {state
          ? state.episodes.map((episode: IEpisode) => (
              <Episode
                episode={episode}
                toggleFavAction={toggleFavAction}
                favourites={state.favourites}
              />
            ))
          : "Loading..."}
      </section>
    </section>
  );
};

export default RickMorty;
