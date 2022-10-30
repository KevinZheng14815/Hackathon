import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {

  let month_number = props.month_number;

  let values = props.values

  const labels = [Math.round(month_number-3), Math.round(month_number-2), Math.round(month_number-1), Math.round(month_number), Math.round(month_number+1), Math.round(month_number+2), Math.round(month_number+3)];

  //FIXME
  const data = {
    labels: labels,
    datasets: [
      {
        
        label: "Oil Price Percentage Change",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [values.value_3_b, values.value_2_b, values.value_1_b, values.value, values.value_1, values.value_2, values.value_3],
      },
    ],
  };

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