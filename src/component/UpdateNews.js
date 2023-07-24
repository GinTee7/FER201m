import React from "react";
import { useState, useEffect } from 'react';

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBase, Grid, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
export default function UpdateNews(){
    const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [content, setContent] = useState('');
 const [img, setImg] = useState('');
 const [created, setCreated] = useState('');
 const [views, setViews] = useState(1);
 const [actractive, setActractive] = useState(true);
 const [status, setStatus] = useState(true);
 const { id } = useParams();
 const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios
        .get(`https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news/${id}`)
        .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setContent(response.data.content);
        setImg(response.data.img);
        setCreated(response.data.created);
        setViews(response.data.views);
        setActractive(response.data.actractive);
        setStatus(response.data.status);
      
        })
        
        .catch((error) => {
        console.log(error);
        });
        }, [id]);
        const handleSubmit = (e) => {
            e.preventDefault();
            const updatedNews = {
            title,
            description,
            content,
            img,
            created,
            views,
            actractive,
            status,
            };
            axios
            .put(
            `https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news/${id}`,
            updatedNews
            )
            .then(() => {
            navigate('/dashboard');
            })
            .catch((error) => {
            console.log(error);
          
            });
            };
       
    return(
        <div style={{padding:"10px 20%",textAlign:'center'}}>
        <h2>Update News</h2>
        <Grid container sx={{   marginTop: '13px',
                                padding: '10px',
                                backgroundColor: '#e4e4e466',
                                borderRadius: '20px',}}>
        <form onSubmit={handleSubmit}>
            <TextField
                autoFocus
                margin="dense"
                name="title"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                multiline
                label="Description"
                type="text"
                fullWidth
                variant="standard"

                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}

            />
            <TextField
                autoFocus
                margin="dense"
                multiline
                label="Content"
                type="text"
                fullWidth
                variant="standard"

                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}

            />
            <TextField
                autoFocus
                margin="dense"

                label="URL Of Image"
                type="text"
                fullWidth
                variant="standard"

                name="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"

              
                type="date"
                fullWidth
                variant="standard"

                name="created"
                value={created}
                onChange={(e) => setCreated(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"

                label="Views"
                type="number"
                fullWidth
                variant="standard"

                name="views"
                defaultValue="1"
                value={views}
                onChange={(e) => setViews(e.target.value)}
            />
            <Grid item md={12}>
                <FormControlLabel
                control={
                <Checkbox
                    checked={status}
                    onChange={(e) => setStatus(e.target.cheked)}
                    name="status"
                    color="primary"
                    inputProps={{ 'aria-label': 'status checkbox' }}
                />
                }
                label="Status"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={actractive}
                    onChange={(e) => setActractive(e.target.checked)}
                    name="attractive"
                    color="primary"
                    inputProps={{ 'aria-label': 'status checkbox' }}
                />
                }
                label="Attractive"
            />
          </Grid>
          <Button variant="contained" size="small"  type='submit'>Update</Button>
        </form>
        </Grid>
    </div>
    )
}