
import React from 'react'
import {Link} from 'react-router-dom'

function Projects () {
  return (
    // <div style={{padding: "2%"}}>
    <div style={{padding: "5%"}}>

      <div class="card-deck">
        <div class="card" >
          <Link to="/projects/moneymoon" >
            <img class="card-img-top" src={require('../images/moneymoon.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">moneymoon</h5>
              {/* <p class="card-text">personal finace app for two</p> */}
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </Link>
        </div>
        <div class="card">
          <Link to="/projects/atomic-job">
          <img class="card-img-top" src={require('../images/atomicjob.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">atomic job</h5>
            {/* <p class="card-text">organzation you need to get a job</p> */}
            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
          </Link>
        </div>

      </div>

      <div class="card-deck">
      <div class="card">
          <Link to="/projects/pictureshuffle">
            <img class="card-img-top" src={require('../images/pictureshuffle.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">pictureshuffle</h5>
              {/* <p class="card-text">unscramble beautiful pictures as you race the clock</p> */}
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </Link>
          </div>
          <div class="card">
            <Link to="/projects/captionit">
            <img class="card-img-top" src={require('../images/captionit.png')} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">captionIt!</h5>
              {/* <p class="card-text">think youre funny? let the people decide</p> */}
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
            </Link>
          </div>
      </div>

      {/* <div class="card-deck"> */}
      <div class="card">
          <Link to="/projects/typewars">
          <img class="card-img-top" src={require('../images/typewars.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">type wars</h5>
            {/* <p class="card-text"> type racer game with fun themes and music</p> */}
            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
          </Link>
        </div>
      {/* </div> */}




    </div>
  )
}

export default Projects