const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">


      <a className="navbar-brand" href="/"><img src="/images/base/logo-small.jpg" alt="" width="60" height="40" className="rounded" /></a>

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
            <a className="nav-link " id="navProjects" aria-current="page" href="/membership">Membership</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navKiteFest" aria-current="page" href="/committee">Comittee</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navYICU" aria-current="page" href="/Events">Events</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navYGC" aria-current="page" href="/youth">Youth</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navGalley" aria-current="page" href="/gallery">Gallery</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navSTEAM" aria-current="page" href="/sponsors">Sponsors</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " id="navSTEAM" aria-current="page" href="/contact">Contact Us</a>
          </li>

        </ul>

      </div>




    </nav>

  );
}
export default Navbar;
