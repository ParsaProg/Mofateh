// components/charts/DoughnutChart.tsx
"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register once
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: any;
  options?: any;
  width?: number;
  height?: number;
}

export default function DoughnutChart({
  data,
  options = {},
  width = 90,
  height = 90,
}: DoughnutChartProps) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false, // Hide data labels on segments
      },
    },
    ...options,
  };

  return (
    <div style={{ width, height }}>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
}
