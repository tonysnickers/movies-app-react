import { Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const MovieDetail = () => {
  return (
    <Container sx={{marginTop: "60px"}}>
      <Stack spacing={3} direction="row">
        <img src="https://picsum.photos/200/300" alt="" />
        <Box>
          <Typography variant='h2'>
            Title
          </Typography>
          <Typography variant='body'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore atque eligendi praesentium dolores numquam tempore accusantium quam consequuntur necessitatibus, harum nostrum quo dolor quas minus voluptates nisi explicabo. Tenetur.
          </Typography>
        </Box>
      </Stack>
    </Container>
  )
}

export default MovieDetail
