import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export const CakeGraph = ({ data } : any) => {
  const backgroundColors = [
     '#323232', 
    '#97577D',  
    '#F5E2A0',  
  ];
 const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context : any) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed !== null) {
            label += `${context.parsed}%`;
          }
          return label;
        },
      },
    },
    legend: {
      display: true,
      position: 'bottom' as const, 
      }
    },  };
  const chartData = {
    labels: data.map((item: { label: any; }) => item.label),
    datasets: [
      {
        label: '# of Votes',
        data: data.map((item: { value: any; }) => item.value),
        backgroundColor: backgroundColors,
        borderColor:  '#323232',
        borderWidth: 0,
        cutout: '50%',
      },
    ],
  };



  return <Doughnut options={options} data={chartData}  />;
};
