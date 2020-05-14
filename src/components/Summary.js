import React from 'react'

function Summary () {
  return (
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
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Summary