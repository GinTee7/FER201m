import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Home(){
    const [APIData, setAPIData]= useState([])

    useEffect(() => {
      axios.get(`https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news`)
      .then(response => setAPIData(response.data))
      .catch(error => console.log(error));
      }, []);
      console.log(APIData)

    return(
        <Grid container className="home">
        {APIData.filter(news => news.actractive).map(news => (
          <Grid key={APIData.id} item  md={4} sx={{display:'flex',justifyContent:'center',marginBottom:'5%', marginTop:'5%'}}>
            <Card sx={{ maxWidth: 345 }}>
             
                <CardMedia
                  component="img"
                  height="140"
                  image={news.img}
                />
                <CardContent>
                  <Typography variant="h5"  component={Link} to={`/detail/${news.id}`}>
                    {news.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {news.description}
                  </Typography>
                </CardContent>
            
              <CardActions>
                
                <Button component={Link} to={`/detail/${news.id}`} size="medium" color="primary">
                  Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
            ))}
        </Grid>
    )
}