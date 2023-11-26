import { Navigate, Outlet } from "react-router-dom";

type Props = {
  role: "admin" | "employee" | "user";
  path?: string;
};

const PrivateRoute = ({ role, path = "/login" }: Props) => {
  if (!role) {
    return <Navigate to={path} replace />;
  }

  return <Outlet context={[1, 2]} />;
};

export default PrivateRoute;
