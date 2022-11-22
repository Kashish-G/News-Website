import react from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import './index.css';
import Box from '@mui/material/Box';
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link,  
    BrowserRouter
  }   
  from 'react-router-dom';

  


const Test=(props)=>
{
    const[MyData,SetMyData]=useState([]);

  

  useEffect(()=>
  {

    var config = {
        method: 'get',
        url: 'https://unicode-lp.onrender.com/news',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1paGlyU2hpbmRlIiwiaWF0IjoxNjY4MzQzODMzLCJleHAiOjE2NjgzNDc0MzN9.0gVWUNPZrpUTbb3igQS4E25s5cWKj7WKtcHjdSF84Lo'
        }
      };
      axios(config)
      .then(res=>SetMyData(res.data.articles))
  },[])

  
  console.log(MyData)
    return(
        <div>
          <h1 className='heading1'>News <span className='heading2'>Times</span></h1>
            <Grid container>
               
                {
                    MyData.length==0?
                    <div></div>:
                    
                    MyData.map((values)=>
                        (
                            
                            <>
                            
                            <Grid item xs={12} md={6} lg={3} className='card'>
                          
                            <Card className="mui-card xs-shadow">
                                <CardMedia
                                component="img"
                                alt="News Image"
                                height="200"
                                
                                image={values.urlToImage}
                            />
                        
                            <CardContent key={values.title}>
                            <Box sx={{ bgcolor:'secondary.main' }} width='100%'>
                            <Typography gutterBottom variant="overline" component="div" color='white' paddingLeft={'10px'}>
                                {values.source.name}
                                </Typography>
                            </Box>
                                <Typography gutterBottom fontSize={'20px'} fontWeight={'bold'} component="div">
                                {values.title}
                                </Typography>
                                <Typography variant="subtitle1" fontSize={'15px'} color="text.secondary">
                                {values.description}
                                </Typography>
                                <Typography align='right' >
                                <Button style={{
                                                    backgroundColor: "purple",
                                                    fontSize: "10px"
                                                }}
                                                variant="contained">
                                <a target='blank' href={values.url}>Read More</a> 
                                </Button>
                                </Typography>
                                <Typography gutterBottom variant="caption" fontSize={'10px'}  color="text.secondary"   component="div">
                                {values.publishedAt} | {values.author}
                                </Typography>
                                
                            </CardContent>
                        
                            
                            </Card>
                     
                            </Grid>
                          
                        
                            
                          
                            </>
                        )
                           
                        )   
                }
                </Grid>
         
            <div className='body'>
            </div>
        </div>
       

    )
}

export default Test