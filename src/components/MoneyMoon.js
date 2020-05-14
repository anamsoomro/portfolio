import React from 'react'
import {Link} from 'react-router-dom'

function MoneyMoon () {
  return (
    <div>
      <h2> MoneyMoon</h2>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require('../images/moneymoon.gif')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/moneymoon1.png')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/moneymoon2.png')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/moneymoon3.png')} alt="fail"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require('../images/moneymoon4.png')} alt="fail"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <p>
        made with: Ruby on Rails, React, Redux, Plaid API, Chart.js, Bootstrap and Matierialize
      </p>
      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>Demo</h3> </a>
      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>GitHub</h3> </a>


      <Link to="/projects"><h3>BACK TO PROJECTS</h3></Link>
    </div>
  )
}

export default MoneyMoon