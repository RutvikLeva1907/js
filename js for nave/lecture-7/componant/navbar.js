const navbar=()=>{
    return`<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/pages/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/add.html">Add Places</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link " href="/pages/login.html" >Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/pages/signup.html" >Singup</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`
}


export default navbar