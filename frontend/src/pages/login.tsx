import { Button } from "@shadcn/ui/button";
import React from "react";
import { http } from "../services/httpRequest";

const Login = () => {
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
      <Button onClick={getUser}>Get Users</Button>
    </div>
  );
};

export default Login;
