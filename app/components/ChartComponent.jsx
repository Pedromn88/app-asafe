import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { colorGraphs } from "../utils/middleware";
import { Line } from "react-chartjs-2";

const ChartComponent = ({
  data,
  labels,
  label,
}) => {
  const [dataGraphs, setDataGraphs] = useState()
  const [options, setOptions] = useState()


  const buildChartData = () => ({
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: colorGraphs(label, true),
          borderColor: colorGraphs(label),
          pointBackgroundColor: colorGraphs(label, true),
          borderWidth: 3,
          fill: true,
          pointRadius: 0,
          tension: 0.1,
          unit: " kW"
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
      hoverRadius: 6,
      hoverOpacity: 0.6,
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: {
            offset: true,
            borderColor: '#8c8c8c',
            borderWidth: 3,
          },
          ticks: {
            font: {
              size: 12,
            },
            callback: function (value) {
              return value.toFixed(0) + " kWh";
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 10,
            },
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
          },
          display: true,
          position: 'bottom',
          align: 'center'
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label
              return label + ' : ' + new Intl.NumberFormat().format(context.parsed.y) + " kWh"
            }
          }
        },
        zoom: {
          pan: {
            enabled: true,
            mode: "x",
            speed: 0.5,
          },
          zoom: {
            wheel: {
              enabled: true,
              speed: 0.1
            },
            mode: 'x'
          }
        }
      }
    }
  });

  useEffect(() => {
    if (data?.length > 0 && labels?.length > 0) {
      const { data: chartData, options: chartOptions } = buildChartData();
      setDataGraphs(chartData);
      setOptions(chartOptions);
    }
  }, [labels]);

  return (
    <div>
      {dataGraphs &&
        <Line style={{ width: '100%', height: '20em' }}
          data={dataGraphs}
          options={options} />
      }
    </div>

  );
};

export default ChartComponent;
