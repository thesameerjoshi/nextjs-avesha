import React from 'react'
import { Grid, Paper, Box, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const User = ({data}) => {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map((user) => 
                    <Grid key={user.id} item xs={6}>
                        <Item>{user.name}</Item>
                    </Grid>
                )}
                
            </Grid>
        </Box>
    </>
  )
}

export default User