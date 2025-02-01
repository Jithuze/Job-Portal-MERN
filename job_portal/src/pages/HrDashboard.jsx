import React from 'react'
import { Link } from 'react-router-dom'

const HrDashboard = () => {
  return (
    <div>
      <Link to={'/add-job'}>
        <button className='button-big'>Add Job</button>
      </Link>
    </div>
  )
}

export default HrDashboard
