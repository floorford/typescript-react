import { url } from "./api";
import { IEpisode, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const data = await fetch(url);
  const json = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: json._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
) => {
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
