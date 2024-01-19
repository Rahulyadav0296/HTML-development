import React from "react";
import { useParams } from 'react-router-dom'

// useParams  hooks return an object of key/value pairs of the dynamic
// params from the current URL that were matched by the <Route Path>.child routes inherit all params from thier parent routes

function User() {
    const {userid} = useParams()
    return (
        <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
    )
}

export default User