import React from 'react';
import { Box, Typography, styled, Paper, Grid, CardActions, CardContent, Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Card = ({ datas }) => {
    // console.log(datas);
  return (
    <>
          <Box>
            {datas.map((data) => {return(
                <>
                    <Typography key={data.type} variant="lead" component="h3" textAlign='left' mt={5} gutterBottom>
                        {data.type}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {data.posts.map((post, index) => 
                                <Grid item xs={2} sm={4} md={4} key={index} >
                                    <Item>{post.job}</Item>
                                    {/* <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {post.location}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                               {post.job}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Apply Now ></Button>
                                        </CardActions>
                                    </Card> */}
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </>
            )})}
          </Box>
    </>
  )
}

export default Card