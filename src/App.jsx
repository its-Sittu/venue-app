import React from 'react'
import venue from './assets/components/data'
import VenueCard from './assets/components/venueCard'

const App = () => {
  return (
    <div className="Container">
        <h1>Venue List</h1>
       <div className="grid">
          {venue.map((venue) =>(
            <VenueCard key={venue.id} venue={venue}/>
          ))}
       </div> 
    </div>
  )
}

export default App
