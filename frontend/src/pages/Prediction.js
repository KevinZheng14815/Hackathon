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


    const [newsResponse, setnewsResponse] =  useState(0);
    
    
    const [res, setRes] = useState(null);

    const [values, setValues] = useState({value_3_b:0, value_2_b:0, value_1_b:0, value:0, value_1:0, value_2:0, value_3:0});

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
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+1 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+1 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_1:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+2 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_2:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+3 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_3:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+4 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_1_b:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+5 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_2_b:response.data}));
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        axios.request({
            method: "GET",
            url: "http://127.0.0.1:5000/oil_change?months=" + e.target[0].value+6 + "&us_prod_change=" + e.target[1].value + "&saudi_prod_change=" + e.target[2].value + "&airline_change=" + e.target[3].value + "&stock_change=" + e.target[4].value,
        })
        .then((response) => {
            setValues(values => ({...values, value_3_b:response.data}));
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
        // "X-RapidAPI-Key": "430fc59c31msh2ed668c3ca8d6ebp17ed37jsna473e14d06ea",
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
        <div className="percentage-output">

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
                        <h1 class="result" style={{ overflow:'flex' }}>{res}</h1>
                

        </div>
      </div>

      {/* Visualization of data */}
      <div class="flex p-8">
        {/* <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4 bg-violet-200"> */}
        <div class="block p-6 rounded-lg shadow-sm hover:shadow-2xl bg-blue-100 w-3/4">
                        <LineChart month_number={res} values={values} />
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
