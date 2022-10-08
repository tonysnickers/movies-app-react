import axios from "axios"

const apiKey = "7a6a1bf84273ea2287a836a3821ac0a7"

//get recent movies
export const getLatestMovie = () => {
  const url =  `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=fr`
  const result = axios.get(url).then(res => console.log(res.data))
}

// Get popular movie
export const  getPopularMovie = async () => {
  const url =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  const result = await axios.get(url).then(res => res.data.results)
  return result
}
