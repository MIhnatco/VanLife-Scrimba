import { Outlet } from "react-router";

function Dashboard() {
  return (
    <>
      <p>Dashboard component</p>
      <Outlet />
    </>
  );
}

export default Dashboard;
