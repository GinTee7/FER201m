import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/dashboard.css'

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Dashboard(){
  
    const [APIData, setAPIData]= useState([])

    useEffect(() => {
      axios.get(`https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news`)
      .then(response => setAPIData(response.data))
      .catch(error => console.log(error));
      }, []);
      const handleDelete = (id) => {
       
        if (window.confirm('Are you sure you want to delete this news item?')) {
         
          axios
            .delete(`https://64b207ae062767bc4826c1ac.mockapi.io/api/v1/news/${id}`)
            .then(() => {
           
              setAPIData(APIData.filter((news) => news.id !== id));
             
              alert('News item deleted successfully!');
            })
            .catch((error) => {
             
              console.error('Error deleting news item:', error);
            });
        }
      };    
  

    return(
        <div className="dashboard" >
          <div className="add" >
            <Button  component={Link} to={`/add`}  variant="contained" >Add News</Button>
          </div>
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Content</th>
            <th>Images</th>
            <th>Views</th>
            <th>Actractive</th>
            <th>Status</th>
            <th>Action</th>
         
          </tr>
        </thead>
        <tbody>
          {APIData.map(news => (
            <tr key={news.id}>
            <td>{news.id}</td>
              <td>{news.title}</td>
              <td >{news.description}</td>
              <td>{news.content}</td>
              <td><img src={news.img} /></td>
              <td>{news.views}</td>
              <td> {news.actractive ? "True" : "False"}</td>
              <td> {news.status ? "True" : "False"}</td>
              <td className="action-cell">
                <Link to={`/news/${news.id}/edit`}>Edit</Link>
                <button onClick={() => handleDelete(news.id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


        </div>
    )
}