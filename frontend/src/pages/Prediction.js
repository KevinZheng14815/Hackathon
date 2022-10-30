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

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    //console.log(today)
    // FIXME: 0 is default value, set it to today's date
    const [newsResponse, setnewsResponse] =  useState(0);
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
                'X-RapidAPI-Key': '9342f64145mshd8114bf17cb9cefp1f654bjsna4917672b392',
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
      

        
        <div class="flex p-8 space-x-10">
        

            <div class="block p-6 rounded-lg shadow-lg bg-white w-1/2">
                <form>

    <div class="form-group mb-6">
      <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Time in Months</label>
      <input type="integer" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="num-months"
        placeholder="Number of months from now"></input>
    </div>
    <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Calculate</button>
                </form>  
            </div>


            <div class="block p-6 rounded-lg shadow-lg bg-white w-1/2">
                <p>temp result</p>
            </div>

        </div>

        {/* Visualization of data */}
        <div class="p-8">
            <div className='line-chart'>
                <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
                    <LineChart />
                    
                </div>
                
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


