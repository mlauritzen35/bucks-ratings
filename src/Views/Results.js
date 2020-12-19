import React,{ useState, useEffect } from 'react'
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';
import './Results.css'
import { Link } from 'react-router-dom'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listRatings } from '../graphql/queries'
import awsExports from "../aws-exports"
Amplify.configure(awsExports)

function Results({ currentGame }) {
    const [ratings, setRatings] = useState([])
    const [averageRatings, setAverageRatings] = useState([])

    useEffect(() => {getRatings()}, [])

    function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

    function getAverageRatings(ratings) {
      const groupedRatings = groupBy(ratings, 'ratee')
      for(var ratee in groupedRatings) {
          const average = groupedRatings[ratee].reduce((total, next) => total + next.rating, 0) / groupedRatings[ratee].length;
          const roundedAverage = Math.round(average * 100)/100
          setAverageRatings(averageRatings => [...averageRatings, {name: ratee, rating: average}])
      }
    }

    async function getRatings() {
      try {
        const ratingsData = await API.graphql(graphqlOperation(listRatings, {
          filter: {
              gameId: {
                  eq: currentGame.id
              }
          }, limit: 1000
      }))
        const ratings = ratingsData.data.listRatings.items
        setRatings(ratings)
        const groupedRatings = groupBy(ratings, 'ratee')
        for(var ratee in groupedRatings) {
            const average = groupedRatings[ratee].reduce((total, next) => total + next.rating, 0) / groupedRatings[ratee].length;
            const roundedAverage = Math.round(average * 10) / 10
            setAverageRatings(averageRatings => [...averageRatings, {name: ratee, rating: roundedAverage}])
        }
      } catch (err) { console.log('error fetching ratings') }
    }

    return (
        <div>
          <p>Results: {currentGame.opponent} - {currentGame.date.getMonth() + 1}/{currentGame.date.getDate() + 1}</p>
            <div className="RechartsDiv">
                <ResponsiveContainer width={"95%"} height={"100%"}>
                    <BarChart
                    data={averageRatings}
                    margin={{
                    top: 10, right: 0, left: -30, bottom: 0,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='name' angle={-90} textAnchor="end" height={80} interval={0} />
                        <YAxis type="number" domain={[0, 10]} />
                        <Tooltip />
                        <Bar dataKey='rating' fill="#004514"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p>Total Votes: {ratings.length}</p>
            <Link to="/success">
                <button>Return</button>
            </Link>
        </div>
    )
}

export default Results
