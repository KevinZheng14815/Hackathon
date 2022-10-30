import React from 'react';
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
    // const [newsResponse, setnewsResponse] =  useState(0);
    // useEffect(() => {
        
        
    //     const options = {
    //         method: 'GET',
    //         url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    //         params: {
    //             q: 'global oil prices',
    //             pageNumber: '1',
    //             pageSize: '1',
    //             autoCorrect: 'true',
    //             fromPublishedDate: 'null',
    //             toPublishedDate: 'null'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': 'df7b7367f1mshbb472ba7122aec4p19dd22jsna85b26a629ca',
    //             'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    //         }
    //     };


    //     axios.request(options).then(function (response) {
    //         //instead of console log, set the state below 
    //         console.log(response.data);
    //         setnewsResponse({"title":response.data['value'][0]['title'],"url":response.data['value'][0]['url'],"description":response.data['value'][0]['description']})
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    // }, []);
    
    const [res, setRes] = useState(null);

    var answer = 0
    
    function getData(e) {
        e.preventDefault();
        console.log(e.data);
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setRes(response.data);
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }




    return (
    <div className="Prediction">
        <h1>PREDICTION</h1>
        <div className="percentage-output">

            <div className="input-form">
                <form onSubmit={getData} method="GET" >
                    <label>
                        Time in Months:
                        <input type="text" defaultValue='0' id='months' name="months"/>
                        <br></br>
                        US Production Change
                        <input type="text" defaultValue='0' id='us_prod' name="us_prod"/>
                        <br></br>
                        Saudi Production Change
                        <input type="text" defaultValue='0' id='saudi_prod_change' name="saudi_prod_change"/>
                        <br></br>
                        Airline Change:
                        <input type="text" defaultValue='0' id='airline_change' name="airline_change"/>
                        <br></br>
                        Stock Change:
                        <input type="text" defaultValue='0' id='stock_change' name="stock_change"/>
                        <br></br>
                        {/* <input type="texts" id='endDate' />
                        <br></br> */}
                        <input type='submit' value='submit' />
                    </label>
                </form>
            </div>
            
                { res }

            <div className="result">
                <p>temp result</p>
            </div>

        </div>

        {/* Visualization of data */}
        {/* <div className="data-display">
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

        </div> */}






    </div>
    );
}

export default Prediction;