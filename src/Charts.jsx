import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Pie } from 'react-chartjs-2';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);



export function Charts() {
  return (
    <div className="row chart-row">
      {/* Area Chart */}
      <div className="col-xl-8 col-lg-7 mb-4">
        <div className="card">
          {/* Card Header */}
          <div className="card-header head">
            <h6 className='head-content'>Earnings Overview</h6>
            <ArrowDropDownIcon />
          </div>
          <LineCharts />
        </div>
      </div>

      {/* Revenue Sources */}
      <div className="col-xl-4 col-lg-5 mb-4">
        <div className="card">
          {/* Card Header */}
          <div className="card-header head">
            <h6 className='head-content'>Revenue Sources</h6>
            <ArrowDropDownIcon />
          </div>
          {/* Card-Body */}
          <div className='card-body'>
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  );
}

function LineCharts() {

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number(40000)),
        borderColor: '#4e73df',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' ,
      },
    },
  };

  return (
    <div>
      <Line 
        options={options} 
        data={data} />
    </div>
  )
}

function PieCharts() {

  const data = {
    labels: ['Direct', 'Social', 'Referrals'],
    datasets: [
      {
        label: '# of Votes',
        data: [55,30,15],
        backgroundColor: [
          '#4e73df',
          '#1cc88a',
          '#36b9cc'
        ],
        borderColor: [
          '#4e73df',
          '#1cc88a',
          '#36b9cc'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie 
      data={data} />
  )
}