import React from 'react'

const VenueCard = ({ venue }) => {
  return (
    <div className="card">
        <img src={venue.image} alt={venue.name} />
        <p>{venue.name}</p>
        <p>{venue.location}</p>
        <p>{venue.price}</p>

    </div>
  )
}

export default VenueCard