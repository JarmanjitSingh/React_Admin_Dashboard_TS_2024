import { Link } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import {IoIosPeople} from 'react-icons/io';
import {AiFillFileText} from 'react-icons/ai';

const AdminSidebar = () => {
  return (
    <aside>
      <h2>LOGO.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
              <RiDashboardFill />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/admin/product"}>
              <RiShoppingBag3Fill />
              Product
            </Link>
          </li>
          <li>
            <Link to={"/admin/customer"}>
              <IoIosPeople />
              Customer
            </Link>
          </li>
          <li>
            <Link to={"/admin/transaction"}>
              <AiFillFileText />
              Transaction
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
