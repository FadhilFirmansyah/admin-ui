import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '../../Elements/Card';
import chart from '../../../data/chart';


const CardStatistics = () => {
  const series = [
    { data: chart.map((item) => item.series[0].value), label: "This Week" },
    { data: chart.map((item) => item.series[0].value), label: "Last Week" },
  ];

  const xAxis = [{ data: chart.map((item) => item.label), scaleType: "band" }];

  return (
    <Card
      variant="md:col-span-2"
      title="Statistics"
      desc={
        <BarChart
          series={series}
          height={290}
          xAxis={xAxis}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      }
    />
  );
};

export default CardStatistics;