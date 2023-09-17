import profile from "../Asset/profile.jpg";
// import Profile from "./Profile_section";
import Dashboard from "./Dashboard";
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
          <span className="menuLink">Dashboard</span>
          <span className="menuLink">Profile</span>
          <span className="menuLink">Images</span>
          <span className="menuLink">Logout</span>
        </div>
        <div className="main">
          <Dashboard />
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
