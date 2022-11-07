import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

 function LineChart() {
    const data = {
        datasetIdKey: 'anjum',
        labels:['jan', 'feb', 'march', 'apr'],
        datasets:[
            {
                id:1,
                label: 'Total Bingocard generated in 2020',
                data:[100, 200, 500, 400]
            }
            
        ]
    }
  return (
    <Line data={data}/>
  )
}
export default LineChart