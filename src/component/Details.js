import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from "axios";


export default function Detail(){
    const { id } = useParams();
    const [newsData, setnewsData]= useState([])
    useEffect(() => {
        axios.get(`https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news/${id}`)
        .then(response => setnewsData(response.data))
        .catch(error => console.log(error));
        }, [id]);
        console.log(newsData)
     
    return(
        <Grid  className="newsDetail" sx={{display:'flex',justifyContent:'center',marginBottom:'5%', marginTop:'5%'}}>
            <Grid container className="newsDetail-content" >
                <Grid container md={12}>  
                    <Grid item md={6}>
                        <img src={newsData.img} />
                    </Grid>
                    <Grid container item md={6} >
                        <Typography variant="subtitle1" >{newsData.title}</Typography>
                        <Typography variant="subtitle1">{newsData.description}</Typography>
                        <Grid item md={12} >
                            <Typography variant="subtitle1"><RemoveRedEyeIcon sx={{marginRight:'5px'}}></RemoveRedEyeIcon>{newsData.views}</Typography>
                            <Typography variant="subtitle1">  {newsData.actractive ? "Actractive" : "Non-Actractive"}</Typography>
                        </Grid>
                    </Grid>
                </Grid> 
                <Grid container md={12} >
                    <Typography variant="subtitle1">{newsData.content}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}