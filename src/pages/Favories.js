import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const Favories = ({ favories, setFavories }) => {
  const handleDelete = (id) => {
    const favDelete = favories.filter((fav) => fav.id !== id)
    setFavories(favDelete)
  }
  console.log(favories)
  return (
    <Container>
      {favories.lenght <= 0 ? (
        <Stack direction="column" spacing={2}> "Vous n'avez de favorie"</Stack>
      ) : (
        <Stack direction="column" spacing={2}>
          {favories?.map((fav) => (
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                alt=""
                height="300px"
              />
              <Stack direction="column" spacing={1}>
                <Typography variant="h2">{fav.title}</Typography>
                <Typography variant="body">{fav.overview}</Typography>
              </Stack>
              <Button onClick={() => handleDelete(fav.id)}>Delete</Button>
            </Box>
          ))}
        </Stack>
      )}
    </Container>
  )
}

export default Favories
