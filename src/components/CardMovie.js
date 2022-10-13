import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

const CardMovie = ({ movie}) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <Link to={`movie/${movie.id}`}>
      <Card>
        <CardActionArea>
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
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Link>
  )
}

export default CardMovie
