import { Outlet, Link } from "react-router-dom";
import profile from "../Asset/profile.jpg";

const Home = () => {
  return (
    <div className="body">
      <nav>
        <div className="center">
          <img src={profile} className="Admin_profile" />
          <span className="center">Hello, Jatin Sharma</span>
        </div>
      </nav>
      <div className="container">
        <div className="sidebar">
          <Link to="/Dashboard" className="menuLink">
            Dashboard
          </Link>
          <Link to="/Profile" className="menuLink">
            Profile
          </Link>
          <Link to="/Images" className="menuLink">
            Images
          </Link>
          <Link to="/Logout" className="menuLink">
            Logout
          </Link>
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="progressbar"></div>
// <Profile />

// <Dashboard />
// </div>
