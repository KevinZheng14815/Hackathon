import "./Prediction.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
//import { require } from 'react'
import LineChart from "../components/LineChart";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import React from "react";

// First use state for date recieved by backend
// Next have use effect that calls a request function with the use state and date recieved as parameters

//Wrap below in useeffect

// not working dont worry
// const navbar = document.getElementById('navbar')
// navbar.render(
//     <div className="flex justify-end">
//         <h1>
//             /prediction
//         </h1>
//     </div>
// )

//Max, we dont need to worry about displaying the value of the result, we just pass the value we have 
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



   

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  //console.log(today)
  //0 is default value
  const [newsResponse, setnewsResponse] = useState(0);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
      params: {
        q: "global oil prices",
        pageNumber: "1",
        pageSize: "1",
        autoCorrect: "true",
        fromPublishedDate: "null",
        toPublishedDate: "null",
      },
      headers: {
        "X-RapidAPI-Key": "dfa69c2eadmsh8775c658cada989p1463e3jsn814d2198184b",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //instead of console log, set the state below
        console.log(response.data);
        setnewsResponse({
          title: response.data["value"][0]["title"],
          url: response.data["value"][0]["url"],
          description: response.data["value"][0]["description"],
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

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

      <div class="flex p-8 space-x-11">
        <div class="block p-6 rounded-lg shadow-sm hover:shadow-2xl bg-blue-100 w-3/4">
          <form onSubmit={getData} method="GET" >
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Time in Months
              </label>
              <input
                type="text"
                class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="months"
                placeholder="Number of months from now"
                name="months"
                defaultValue="0"
              ></input>
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                US Production
              </label>
              <input
                type="text"
                class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="us_prod"
                placeholder="The change in US oil production"
                name="us_prod"
                defaultValue="0"
              ></input>
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Saudi Oil Production
              </label>
              <input
                type="text"
                class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="saudi_prod_change"
                placeholder="The change in oil production for Saudi Arabia"
                name="saudi_prod_change"
                defaultValue="0"
              ></input>
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Airline Flight Change
              </label>
              <input
                type="text"
                class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="airline_change"
                placeholder="Change in flight frequency"
                name="airline_change"
                defaultValue="0"
              ></input>
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Stock Change (S&P 500)
              </label>
              <input
                type="text"
                class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="stock_change"
                placeholder="The change in stock prices for the S&P 500"
                name="stock_change"
                defaultValue="0"
              ></input>
            </div>
            <button
              type="submit"
              class="
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      
      uppercase
      rounded
      shadow-md
      hover:hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" 
    //onChange={addResultToOutput}
            >
              Calculate
            </button>
          </form>
        </div>
        {/* <div class="block p-6 rounded-lg bg-blue-200 w-1/4 shadow-sm hover:shadow-2xl align-middle">
          <div class="flex justify-center items-center">

              <div class="text-center ">
                <h1 class="align-middle">Result</h1>
            </div>
          </div>
        </div> */}
        <div class="center block p-6 rounded-lg bg-blue-200 w-1/4 shadow-sm hover:shadow-2xl align-middle">
                <h1>Percentage</h1>
                <h1 class="result">{res}</h1>
                

        </div>
      </div>

      {/* Visualization of data */}
      <div class="flex p-8">
        {/* <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4 bg-violet-200"> */}
        <div class="block p-6 rounded-lg shadow-sm hover:shadow-2xl bg-blue-100 w-3/4">
          <LineChart />
        </div>

        <div class="flex p-6 w-1/2">
          <NewsCard
            url={newsResponse["url"]}
            title={newsResponse["title"]}
            description={newsResponse["description"]}
          ></NewsCard>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Prediction;
