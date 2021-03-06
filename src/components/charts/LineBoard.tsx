import { PureComponent } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '12:00',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '13:00',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '14:00',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '15:00',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '16:00',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '17:00',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '18:00',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class LineBoard extends PureComponent {

  render() {
    return (
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
