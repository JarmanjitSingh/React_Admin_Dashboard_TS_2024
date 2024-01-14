import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import UserImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={UserImg} alt="user" />
        </div>

        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            heading="Revenue"
            value={342560}
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={-14}
            heading="Users"
            value={400}
            color="rgb(0, 198, 202)"
          />
          <WidgetItem
            percent={80}
            heading="Transactions"
            value={23000}
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            percent={30}
            heading="Products"
            value={1000}
            color="rgb(76, 0, 255)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>

    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255 255 255) 0
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
