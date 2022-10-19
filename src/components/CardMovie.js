import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardMovie = ({ movie, handleFavories, favories }) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const renderIcon = () => {
    if (favories.includes(movie)) {
      return <FavoriteIcon/>
    } else return <FavoriteBorderIcon/>
  }

  return (
    <Card>
      <CardActionArea>
        <Link to={`movie/${movie.id}`}>
          <CardMedia
            component="img"
            height="380"
            image={image}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleFavories(movie)} >
          {renderIcon()}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardMovie
