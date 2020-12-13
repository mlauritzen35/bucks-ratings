import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './Summary.css'

function Summary() {
    const ratings = [
        {
            name: 'Giannis',
            rating: 9.3
        },
        {
            name: 'Khris',
            rating: 8.1
        },
        {
            name: 'Jrue',
            rating: 8.1
        },
        {
            name: 'Brook',
            rating: 7.8
        },
        {
            name: 'Donte',
            rating: 6.8
        },
        {
            name: 'Portis',
            rating: 7.4
        },
        {
            name: 'Augustin',
            rating: 6.6
        },
        {
            name: 'Pat',
            rating: 6.1
        }
    ]
    return (
        <div className="RechartsDiv">
        <ResponsiveContainer width={700} height={"80%"}>
        <BarChart
        width={1000}
        height={600}
        data={ratings}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis type="number" domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey='rating' fill="#004514" />
      </BarChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Summary