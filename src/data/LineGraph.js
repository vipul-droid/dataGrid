import React from 'react'
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const pdata = [
    {
        name: 'January',
        student: 11,
        ActiveUser: 150
    },
    {
        name: 'February',
        student: 15,
        ActiveUser: 12
    },
    {
        name: 'March',
        student: 5,
        ActiveUser: 10
    },
    {
        name: 'April',
        student: 10,
        ActiveUser: 5
    },
    {
        name: 'May',
        student: 9,
        ActiveUser: 4
    },
    {
        name: 'June',
        student: 10,
        ActiveUser: 8
    },
];

function LineGraph() {

    return (
        <div>
            <h4 className="text-heading">
                Line Chart 
            </h4>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="ActiveUser"
                        stroke="blue" activeDot={{ r: 10 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraph
