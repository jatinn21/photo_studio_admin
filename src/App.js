import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile_section";
import Images from "./Components/Images";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  // return <Home />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Images" element={<Images />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
