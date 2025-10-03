import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Transportation', value: 200 },
  { name: 'Accommodation', value: 400 },
  { name: 'Food & Dining', value: 250 },
  { name: 'Activities', value: 150 },
];

const COLORS = ['#FF1493', '#FFD700', '#4ECDC4', '#8A2BE2'];

const BudgetChart = () => (
  <div style={{ width: '100%', height: 250 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default BudgetChart;
