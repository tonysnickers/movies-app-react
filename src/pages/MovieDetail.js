import { CardMedia, Grid, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [similarMovie, setSimilarMovie] = useState([])

  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7a6a1bf84273ea2287a836a3821ac0a7&language=en-US`
  useEffect(() => {
    const FetchData = async () => {
      await axios.get(url).then((res) => setMovie(res.data))
    }
    FetchData()
    getSimilar()
  }, [])
  console.log(similarMovie)
  const getSimilar = async () => {
    const urll = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7a6a1bf84273ea2287a836a3821ac0a7&language=en-US&page=1`
    await axios.get(urll).then((res) => setSimilarMovie(res.data.results))
  }

  return (
    <Container sx={{ marginTop: '60px' }}>
      <Stack spacing={3} direction="row">
        <CardMedia
          component="img"
          height="580"
          image={image}
          alt={movie.title}
        />
        <Box>
          <Typography variant="h2">{movie.title}</Typography>
          <Stack spacing={3} direction="row" sx={{ margin: '10px 0' }}>
            {movie?.genres?.map((genre) => (
              <Typography
                sx={{
                  border: '1px solid',
                  padding: '5px 10px',
                  borderRadius: '10px',
                }}
              >
                {genre.name}
              </Typography>
            ))}
          </Stack>
          <Typography variant="body">{movie.overview}</Typography>
        </Box>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: '60px' }}>
        {similarMovie?.map((movie) => (
          <Grid item xs={4}>
            <CardMovie movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MovieDetail
