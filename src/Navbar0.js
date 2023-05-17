const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">


  <a className="navbar-brand" href="/"><img src="/images/homePage/Logo.jpg"alt="" width="40" height="40" className="rounded"/></a>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link " id="navHome" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link  " id="navAbout" aria-current="page" href="/about">About Us</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link " id="navProjects" aria-current="page" href="/projects">Projects</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " id="navKiteFest" aria-current="page" href="/kitefest">Kite Fest</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " id="navYICU" aria-current="page" href="/yicu">YICU</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " id="navYGC" aria-current="page" href="/ygc">YGC</a>
      </li>

      <li className="nav-item" >
        <a className="nav-link" id="navContact" href="/contact">Contact Us</a>
      </li>

    </ul>

  </div>

  <a href="/donate" class="btn btn-success my-2 my-sm-0 btn-md active" role="button" aria-pressed="true">Donate</a>


</nav>

  );
}
export default Navbar;
