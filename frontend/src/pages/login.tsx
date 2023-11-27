import { Button } from "@shadcn/ui/button";
import { http } from "../services/httpRequest";
import { Badge } from "@shadcn/ui/badge";

const Login = () => {
  async function onLogout() {
    const res = await http.Post("/logout", {});
    console.log("response: ", res);
  }
  async function onLogin() {
    const res = await http.Post("/login", {
      Email: "admin@admail.com",
      Password: "admin",
    });
    console.log("login success: ", res);
  }
  async function getUser() {
    const res = await http.Get("/users");
    console.log("users: ", res);
  }

  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center gap-2">
      <Button onClick={onLogin}>Login</Button>
      <Badge className=" bg-emerald-500 rounded-full">admin</Badge>
      <Button onClick={getUser}>Get Users</Button>
      <Button onClick={() => console.log("Cookie : ", document.cookie)}>
        Cookie
      </Button>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default Login;
