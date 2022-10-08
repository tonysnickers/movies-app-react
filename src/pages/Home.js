import { Movie } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { getLatestMovie, getPopularMovie } from "../services/Api";

const Home = () => {
  const apiKey = "7a6a1bf84273ea2287a836a3821ac0a7"
  const [movies, setMovies] = useState([])
  useEffect(()=> {
    const FetchData = async () => {
      const url =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      await axios.get(url).then(res => setMovies(res.data.results))
    }
    FetchData()
  }, [])

  return (
    <Container sx={{marginTop: "60px"}}>
      <Grid container spacing={2}>
        {movies?.map((movie, i) => (
          <Grid item xs={4} key={i}>
              <CardMovie movie={movie}/>
          </Grid>
        ))}

      </Grid>
    </Container>
  );
}

export default Home;
