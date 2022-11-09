import { Outlet } from "react-router-dom";
import TopNavigation from "../ui/top-navigations/TopNavigation";

const Layout = () => {
  return (
    <div className="layout__container">
      <div className="layout__header">
        <TopNavigation />
      </div>
      <div className="layout__body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
