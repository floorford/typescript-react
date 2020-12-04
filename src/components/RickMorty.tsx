import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { Store } from "../Store";
import { url } from "../api";

const RickMorty = () => {
  //[value, function to change value]
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

  const regex = /(<([^>]+)>)/gi;

  return (
    <section>
      <Typography variant='h3'>Rick and Morty Episode Picker</Typography>
      <Typography variant='h5' style={{ textAlign: "center" }}>
        Pick your favourite episode!
      </Typography>

      <section className='flex-container'>
        {state
          ? state.episodes.map((episode: any) => (
              <Card
                style={{
                  width: 345,
                  border: "1px solid grey",
                  margin: "1rem",
                }}
                key={episode.id}
              >
                <CardMedia
                  style={{ height: 140 }}
                  image={episode.image.medium}
                  title={episode.name}
                />
                <CardHeader title={episode.name} subheader={episode.airdate} />
                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Season: {episode.season}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Number: {episode.number}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {episode.summary
                      ? episode.summary.replace(regex, "")
                      : null}
                  </Typography>
                </CardContent>
              </Card>
            ))
          : null}
      </section>
    </section>
  );
};

export default RickMorty;
