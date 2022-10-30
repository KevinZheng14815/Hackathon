import "./Prediction.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//import { require } from 'react'
import LineChart from "../components/LineChart";
import NewsCard from "../components/NewsCard";
import axios from "axios";

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

const Prediction = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  //console.log(today)
  // FIXME: 0 is default value, set it to today's date
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
      <div class="flex p-8 space-x-11">
        <div class="block p-6 rounded-lg shadow-sm hover:shadow-2xl bg-blue-100 w-3/4">
          <form>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword1"
                class="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Time in Months
              </label>
              <input
                type="integer"
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
                id="num-months"
                placeholder="Number of months from now"
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
                <h1 class="result">result</h1>
                

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
  );
};

export default Prediction;
