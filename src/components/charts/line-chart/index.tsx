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
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import {IAssetResponse} from '../../../common/types';

ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
);

export function LineChart(props: { data: IAssetResponse[] }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const data = {
        labels: props.data[0].prices.map((e) => moment(e[0]).format('DD.MM.YY')),
        datasets: [
            {
                label: 'Цена: ',
                data: props.data[0].prices.map((e) => e[1]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
            <Line
                    options={options}
                    data={data}
                    width='100%'
                    height='20%'
            />
    );
}
