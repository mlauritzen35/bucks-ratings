import React,{ useState, useEffect } from 'react'
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './Results.css'
import { Link } from 'react-router-dom'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listRatings } from '../graphql/queries'
import awsExports from "../aws-exports"
Amplify.configure(awsExports)

function Results() {
    const [averageRatings, setAverageRatings] = useState([])

    useEffect(() => {getRatings()}, [])

    function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

    async function getRatings() {
      try {
        const ratingsData = await API.graphql(graphqlOperation(listRatings))
        const ratings = ratingsData.data.listRatings.items
        const groupedRatings = groupBy(ratings, 'ratee')
        for(var ratee in groupedRatings) {
            const average = groupedRatings[ratee].reduce((total, next) => total + next.rating, 0) / groupedRatings[ratee].length;
            setAverageRatings(averageRatings => [...averageRatings, {name: ratee, rating: average}])
        }
      } catch (err) { console.log('error fetching ratings') }
    }

    return (
        <div className="RechartsDiv">
            <ResponsiveContainer width={"95%"} height={"90%"}>
                <BarChart
                data={averageRatings}
                margin={{
                top: 10, right: 0, left: 0, bottom: 0,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='name' angle={-45} textAnchor="end" />
                    <YAxis type="number" domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='rating' fill="#004514" />
                </BarChart>
            </ResponsiveContainer>
            <Link to="/success">
                <button>Return</button>
            </Link>
        </div>
    )
}

export default Results
