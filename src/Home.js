function Home() {
  return (
    <div className="home">
      <span className="title">Here's some of what we have to offer:</span>
      <div className="home-items">
        <div className="item">
          <img className="home-img" src="img1.jpeg" alt="home" />
          <span className="description">
            Room, 20 Sqm <br /> Givatayim
          </span>
        </div>
        <div className="item">
          <img className="home-img" src="img2.jpg" alt="home" />
          <span className="description">
            Room, 20 Sqm <br /> Givatayim
          </span>
        </div>
        <div className="item">
          <img className="home-img" src="img3.png" alt="home" />
          <span className="description">
            Room, 20 Sqm <br /> Givatayim
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
