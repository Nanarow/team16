import { Navigate, Outlet } from "react-router-dom";

type Props = {
  role: "admin" | "employee" | "user";
  redirectPath?: string;
};

const PrivateRoute = ({ role, redirectPath = "/login" }: Props) => {
  if (!role) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
