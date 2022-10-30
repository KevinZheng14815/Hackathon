import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

//FIXME
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />

    {/* <body>
     <script src="node_modules/chart.js/dist/Chart.bundle.min.js"></script>
     <script src="script.js"></script>
    </body> */}
    </div>
  );
};

export default LineChart;