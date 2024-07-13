import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-moment'; // Import chartjs-adapter-moment instead of chartjs-adapter-date-fns

import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const Infographics = ({ data }) => {
    const chartRef = useRef(null);

    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Applicants Hired',
                data: data.hired,
                borderColor: '#37B7C3',
                backgroundColor: 'rgba(55, 183, 195, 0.5)', // Soften the fill color
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#37B7C3', // Points color
                fill: true,
            },
            {
                label: 'Candidates Applied',
                data: data.applied,
                borderColor: '#071952',
                backgroundColor: 'rgba(7, 25, 82, 0.5)', // Soften the fill color
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#071952', // Points color
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Ensure the chart takes full container space
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart',
        },
        scales: {
            x: {
                type: 'category',
                labels: data.months,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: 'Inter, sans-serif',
                        weight: '500',
                    },
                    color: '#6B7280',
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        family: 'Inter, sans-serif',
                        weight: '500',
                    },
                    color: '#6B7280',
                },
                grid: {
                    color: '#E5E7EB',
                    borderColor: '#E5E7EB',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'center',
                labels: {
                    font: {
                        family: 'Inter, sans-serif',
                        weight: '500',
                    },
                    color: '#4B5563',
                },
            },
        },
    };

    useEffect(() => {
        let chartInstance = null;

        if (chartRef.current && chartData.datasets.length > 0) {
            chartInstance = new Chart(chartRef.current.getContext('2d'), {
                type:"line",
                data: chartData,
                options: chartOptions,
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data, chartData, chartOptions]);

    return (
        <div className="my-8 p-4 bg-white shadow-md rounded-lg" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="chart-container" style={{ position: 'relative', height: '600px' }}>
                <canvas id="myChart" ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>
            </div>
        </div>
    );
};

export default Infographics;
