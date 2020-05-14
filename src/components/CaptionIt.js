import React from 'react'
import {Link} from 'react-router-dom'


function CaptionIt () {
  console.log("Rendering")
  return (
    <div>
    <h1> CaptionIt</h1>
    <Link to="/projects"><h2>BACK TO PROJECTS</h2></Link>
    </div>

  )
}

export default CaptionIt