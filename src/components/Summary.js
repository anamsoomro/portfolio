import React from 'react'

function Summary () {
  return (
    <div>

    <div className="div-only-mobile">I AM NOW MBILIE MODE</div>

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      
      
      <div class="w-100">
        <h1 class="mb-0">Anam
          <span class="text-primary">Soomro</span>
        </h1>

        {/* <div class="subheading mb-5">full-stack developer */}
          {/* <a href="mailto:name@email.com">anamsoomroed@gmal.coom</a> */}
        {/* </div> */}
        <p class="lead mb-5">full stack developer with a background in architecture, engineering and construction. taking my background dedicated to the built environment to building on the internet!</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/anamsoomro/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/anamsoomro" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://medium.com/@anamsoomroed" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-medium"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC2q6ffKH0of1asvLXD2H2aA" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
    </div>

  )
}

export default Summary