import { Movie } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie'

const Home = ({ favories, setFavories }) => {
  const apiKey = '7a6a1bf84273ea2287a836a3821ac0a7'
  const [movies, setMovies] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      await axios.get(url).then((res) => setMovies(res.data.results))
    }
    fetchData()
  }, [])

  const handleFavories = (movie) => {
    if (favories.includes(movie)) {
      const deleteFavorie = favories.filter((fav) => fav.id !== movie.id)
      setFavories(deleteFavorie)
      console.log("supprimer", favories)
    } else {
      setFavories([...favories, movie])
      console.log("ajouter", favories)
    }
  }

  return (
    <Container sx={{ marginTop: '60px' }}>
      <Grid container spacing={2}>
        {movies?.map((movie) => (
          <Grid item xs={4} key={movie.id}>
            <CardMovie movie={movie}
            genre={genre}
            setFavories={setFavories}
            favories={favories}
            handleFavories={handleFavories}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
