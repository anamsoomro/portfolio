import React from 'react'
import {Link} from 'react-router-dom'

function MoneyMoon () {
  return (
    <div className="page">
      <h2> MoneyMoon</h2>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        {/* <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol> */}
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

      <span class="badge badge-secondary">Ruby on Rails </span>
      <span class="badge badge-secondary">sqlite3 </span>

      <span class="badge badge-secondary">JavaScript</span>
      <span class="badge badge-secondary">React</span>
      <span class="badge badge-secondary">Redux</span>
      <span class="badge badge-secondary">Chart.js</span>
      <span class="badge badge-secondary">Plaid API</span>
      <span class="badge badge-secondary">Bootstrap</span>
      <span class="badge badge-secondary">Materialize</span>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>demo</h3> </a>

      <a href="https://www.youtube.com/watch?v=1CsJ10XzwuM" target="_blank"><h3>code</h3> </a>

      <p> Personal finance application for two.</p>

      <p>Couples can stay up to date with their financial health, spending habits and trends individually and as a unit. </p>

      <p>Allow for linking of multiple banking institiustions like yours savings accounts, 401ks and loans. </p>

      <p>Interactive charts and filters to target what you you need to have the productive money conversations you dread. </p>




      <Link to="/projects"><h3>BACK TO PROJECTS</h3></Link>
    </div>
  )
}

export default MoneyMoon