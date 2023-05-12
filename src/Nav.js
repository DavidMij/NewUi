function Nav() {
  return (
    <div className="nav">
      <div className="header">
        <a className="logo" href="/home">
          <span className="logo-title">TMS</span>
          <span className="logo-slogan">Take My Stuff</span>
        </a>
        <div className="nav-btns">
          <a href="/search" className="nav-btn">
            Find Storage
          </a>
          <a href="/signin" className="nav-btn">
            Sign In
          </a>
          <a href="/list" className="nav-btn">
            List Storage
          </a>
          <a href="/signup" className="nav-btn">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
