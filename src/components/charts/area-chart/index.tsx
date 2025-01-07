import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend, ScriptableContext,
} from 'chart.js';
import moment from 'moment';
import {Line} from 'react-chartjs-2';

ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
);

interface IProps {
    data: [number[]];
}

export const options = {
    responsive: true,
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            },
        },
        y: {
            display: false,
            grid: {
                display: false
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export function AreaChart(props: IProps) {
    const data = {
        labels: props.data.map((e) => moment(e[0]).format('MMMM Do YYYY, h:mm:ss a')),
        datasets: [
            {
                fill: 'start',
                label: 'Цена',
                data: props.data.map((e) => e[1]),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
                    gradient.addColorStop(0, '#C1EF00');
                    gradient.addColorStop(1, '#232323');
                    return gradient;
                },
            },
        ],
    };

    return (
            <Line
                    options={options}
                    data={data}
                    width={300}
                    height={100}
            />
    );
}
