import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJS.register(...registerables);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Total Income ( Last 6 Months ) - ₹2,230.99",
    },
  },
};

const labels = [
  "Jan 2019",
  "Feb 2019",
  "Mar 2019",
  "Apr 2019",
  "May 2019",
  "Jun 2019",
  "July 2019",
  "Aug 2019",
  "Sept 2019",
  "Oct 2019",
  "Nov 2019",
  "Dec 2019",
];

const data = {
  labels,
  datasets: [
    {
      data: [0.2, 0.4, 0, 0.2, 0.6, 0.4, 0.4, 0.6, 0.2],
      label: "Income",

      backgroundColor: "teal",
    },
    {
      data: [0.2, 0.3, 0.3, 0.1, 0.4, 0.3, 0.5, 0.5, 0.2],
      label: "Date",
      backgroundColor: "gold",
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} width={500} height={200} />
    </div>
  );
};

export default BarChart;
