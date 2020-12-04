import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Episode = (props: any): JSX.Element => {
  const { episode, toggleFavAction, favourites } = props;

  const regex = /(<([^>]+)>)/gi;

  return (
    <Card className='card' key={episode.id}>
      <CardMedia
        style={{ height: 140 }}
        image={episode.image.medium}
        title={episode.name}
      />
      <CardHeader title={episode.name} subheader={episode.airdate} />
      <CardContent>
        <Typography variant='body2'>
          {episode.summary ? episode.summary.replace(regex, "") : null}
        </Typography>
        <Typography
          variant='subtitle2'
          color='textSecondary'
          style={{ paddingTop: 16 }}
        >
          Season: {episode.season}, episode {episode.number}
        </Typography>
        <IconButton
          onClick={() => toggleFavAction(episode)}
          aria-label='add to favorites'
        >
          <FavoriteIcon
            color={favourites.includes(episode) ? "secondary" : "primary"}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Episode;
