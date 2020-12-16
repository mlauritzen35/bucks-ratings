import React from 'react'
import { Link } from 'react-router-dom'

function Success () {
    return (
        <div>
            <h3>Thank you for voting!</h3>
            <Link to="/results">
                <button>Return</button>
            </Link>
        </div>
    )
}

export default Success