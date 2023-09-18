import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Uploaded Data statistics",
      backgroundColor: "#3b0e98",
      borderColor: "#3b0e98",
      data: [5, 10, 25, 52, 20, 30, 45, 20, 72, 28, 32, 12],
    },
  ],
};
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
      <div className="graph center">
        <Line data={data} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Dashboard;
