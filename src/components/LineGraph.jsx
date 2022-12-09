import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Staaack Project",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "04-12",
  "05-12",
  "06-12",
  "07-12",
  "08-12",
  "09-12",
  "10-12",
  "11-12",
  "12-12",
];

const data = {
  labels,
  datasets: [
    {
      label: "Tasks completed per day",
      data: [0, 2, 6, 3, 8, 4, 7, 5, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const LineGraph = () => {
  return <Line options={options} data={data} />;
};

export default LineGraph;
