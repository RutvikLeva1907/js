export const navbar= ()=>{
    return(` <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="rounded-circle" id="logo"
                src="https://avatars.mds.yandex.net/i?id=709740929368059de1fa0aa65b8d48a784b97221bbdaa1dc-8207704-images-thumbs&n=13"
                alt="Image Loading.." height="50px" width="50px"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link"  href="/index.html" id="nav_a"><i
                                class="fa-solid fa-house "></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/add_place.html" id="nav_a"><i
                                class="fa-solid fa-plus"></i>Add Places</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/wiass.html" id="nav_a"><i
                                class="fa-solid fa-heart"></i>Wish List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/login.html" id="login"><i
                                class="fa-solid fa-user"></i>login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/signup.html" id="nav_a"><i
                                class="fa-solid fa-user-plus"></i>sign_up</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" id="search">
                    <input class="form-control me-2" type="search" id="search_input" placeholder="Search"
                        aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
      </nav>`);
}