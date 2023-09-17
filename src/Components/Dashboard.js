const Dashboard = () => {
  return (
    <div className="main_container">
      <p className="main_container_top center">
        <h1>My Dashboard</h1>
      </p>
      <p className="main_container_bottom admin__mainBody">
        <section className="numberCards top_part">
          <p className="numberCard center">
            <span className="card_number center">240+</span>
            <span className="card_title center">Images</span>
          </p>
          <p className="numberCard center">
            <span className="card_number center">110</span>
            <span className="card_title center">Blogs</span>
          </p>
          <p className="numberCard center">
            <span className="card_number center">24</span>
            <span className="card_title center">Videos</span>
          </p>
        </section>
      </p>
    </div>
  );
};

export default Dashboard;
