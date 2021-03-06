import React from 'react'

function Nav () {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <div class="navbar-brand js-scroll-trigger" href="#page-top">

        <span class="d-block d-lg-none">
        </span> 
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
        </span>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/background">Background</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav