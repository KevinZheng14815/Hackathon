import './Prediction.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//import { require } from 'react'
import LineChart from '../components/LineChart';
import axios from 'axios';

// First use state for date recieved by backend
// Next have use effect that calls a request function with the use state and date recieved as parameters


//Wrap below in useeffect







const Prediction = () => {


    // FIXME: 0 is default value, set it to today's date
    const [newsResponse, setnewsResponse] =  useState(null);
    useEffect(() => {
        
        
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
            params: {
                q: 'global oil prices',
                pageNumber: '1',
                pageSize: '1',
                autoCorrect: 'true',
                fromPublishedDate: 'null',
                toPublishedDate: 'null'
            },
            headers: {
                'X-RapidAPI-Key': 'df7b7367f1mshbb472ba7122aec4p19dd22jsna85b26a629ca',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };


        axios.request(options).then(function (response) {
            //instead of console log, set the state below 
            console.log(response.data);
            setnewsResponse({"title":response.data['value'][0]['title'],"url":response.data['value'][0]['url'],"description":response.data['value'][0]['description']})
        }).catch(function (error) {
            console.error(error);
        });

    },[]);


  return (
    <div className="Prediction">
      <h1>PREDICTION</h1>

        <div className="percentage-output">

            <div className="input-form">
                <form>
                    <label>
                        Time in Months:
                        <input type="text" name="time" />
                    </label>
                </form>
            </div>


            <div className="result">
                <p>temp result</p>
            </div>

        </div>

        {/* Visualization of data */}
        <div className="data-display">
            <div className='line-chart'>
                <LineChart />
            </div>

            <div className="news-article">
                <div className='news-title'>
                    <a href={newsResponse['url']}>{newsResponse['title']}</a>
                </div>

                

                <div className='news-description'>
                    <p>{newsResponse['description']}</p>
                </div>

            </div>

        </div>






    </div>
  );
}

export default Prediction;