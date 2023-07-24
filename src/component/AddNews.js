import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { ButtonBase, Grid, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import {Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
export default function AddNews() {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        img: "",
        created: "",
        status: false,
        views: 1,
        actractive: false,
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news', formData)
            .then((response) => {
                alert("News added successfully!");
                setFormData({
                    title: "",
                    description: "",
                    content: "",
                    img: "",
                    created: "",
                    status: true,
                    views: 1,
                    actractive: true,
                });
                navigate('/dashboard');
                setErrors({});
            })
            .catch((error) => {
                setErrors(error.response.data);
            });
    };
    return (
        <div style={{padding:"10px 20%",textAlign:'center'}}>
            <h2>Add News</h2>
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
                    value={formData.title}
                    onChange={handleChange}
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
                    value={formData.description}
                    onChange={handleChange}

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
                    value={formData.content}
                    onChange={handleChange}

                />
                <TextField
                    autoFocus
                    margin="dense"

                    label="URL Of Image"
                    type="text"
                    fullWidth
                    variant="standard"

                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"

                    label="Created Date"
                    type="date"
                    fullWidth
                    variant="standard"

                    name="created"
                    value={formData.created}
                    onChange={handleChange}
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
                    value={formData.views}
                    onChange={handleChange}
                />
                <Grid item md={12}>
                <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.status}
                    onChange={handleCheckboxChange}
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
                    checked={formData.actractive}
                    onChange={handleCheckboxChange}
                    name="actractive"
                    color="primary"
                    inputProps={{ 'aria-label': 'status checkbox' }}
                  />
                }
                label="Actractive"
              />
              </Grid>
              <Button variant="contained" size="small"  type='submit'>Add</Button>
            </form>
            </Grid>
        </div>
    )

}