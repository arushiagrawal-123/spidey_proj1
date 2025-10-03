import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', temp: 26 },
  { name: 'Tue', temp: 24 },
  { name: 'Wed', temp: 22 },
  { name: 'Thu', temp: 25 },
  { name: 'Fri', temp: 27 },
];

const WeatherChart = () => (
  <div style={{ width: '100%', height: 250 }}>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#FFD700" />
        <YAxis stroke="#FFD700" />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#FF1493" strokeWidth={3} dot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default WeatherChart;
