import React from 'react'

function Experience () {
  return (
    // <section class="resume-section p-3 p-lg-5 d-flex justify-content-center " id="experience">
    <section class="resume-section d-flex justify-content-center page " >


      <div class="w-100">
        <h2 class="mb-5">BACKGROUND</h2>


        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">looking for my next oppurtunity!</h3>
            <p>got an oppurtinity in mind? a project you want to collaborate on? just want to chat? <a href="mailto:anamsoomroed@gmail.com" target="_blank" rel="noopener noreferrer">email me!</a>  <a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer"> or connect with me on LinkedIn!</a> </p>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Software engineering</h3>
            <div class="subheading mb-3">Flatiron school</div>
            <p>built full stack applications </p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">May 2020 </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">project engineer</h3>
            <div class="subheading mb-3">the beck group</div>
            <p>construction management for dallas downtown plaza rennovation</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">March 2019</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">sustainability consultant</h3>
            <div class="subheading mb-3">the beck group</div>
            <p>working with architecure teams on incorporating sustainable measures toward energy, water, buliding materials, daylight access</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">May 2018</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between  mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Energy Modeler</h3>
            <div class="subheading mb-3">alliantgroup</div>
            <p> simulated enrgy performance of buildings from prisons to air plane hangars to qualify designers and builders for money back. </p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2016</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Civil Engineering</h3>
            <div class="subheading mb-3">university of houston</div>
            <p>learning about the magic of coffee</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">July 2016</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Engineering Intern</h3>
            <div class="subheading mb-3">A&S Engineers</div>
            <p> the design and construction of the systems that get water to your home</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2015</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h4><a href={require('../images/Soomro_Resume.pdf')} target="_blank">check out my resume for the deets</a></h4>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience