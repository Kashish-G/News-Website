import React from 'react';
import './News.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

const News = (props) => {
  const[MyData,SetMyData]=useState([]);

  

  useEffect(()=>
  {

    var config = {
      method: 'get',
      url: 'https://unicode-lp.onrender.com/news',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1paGlyU2hpbmRlIiwiaWF0IjoxNjY4MzM3OTA3LCJleHAiOjE2NjgzNDE1MDd9.NRWFi9sTPAMKRFIKaQYqajpGvTm79n0PEc9QjyLcgdI'
      }
    };

      axios(config)
      .then(res=>SetMyData(res.data.articles))
  },[])

  
  console.log(MyData)
    return(
      <div>
          
           
               
                {
                    MyData.length==0?
                    <div></div>:
                    
                    MyData.map((values)=>
                        (
                            
                            <>
                            
                            <div className="container">
    <header>
    <h1 className='heading1'>News <span className='heading2'>Times</span></h1>
    <div className="sub-heading">
      <p>{values.publishedAt}</p>
      <p className="importent">your right to know</p>
    </div>
    </header>

    <div className="main">
      <div className="home">
        <div className="left">
          <h5>{values.source.name} | {values.author}</h5>
          <img src={values.urlToImage} className="home-img" alt="Paper photo" />

          <h2 className="heading-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit cupiditate possimus.
          </h2>
        </div>

        <div className="right">
          <h3 className="heading-3">latest news</h3>
          <div className="lists">
            <div className="list">
              <img src={values.urlToImage} alt="photo 1" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src={values.urlToImage} alt="photo 2" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src={values.urlToImage} alt="photo 3" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src={values.urlToImage} alt="photo 4" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>
          </div>
        </div>
      </div>

      <article>
        {values.content}
      </article>
    </div>
  </div>


                            
                          
                            </>
                        )
                           
                        )   
                }
               
         
            <div className='body'>
            </div>
        </div>
       
        
          

  

    )
}

export default News


