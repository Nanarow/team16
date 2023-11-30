import { http } from "../services/httpRequest";
import { useToast } from "@shadcn/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui/card";
import Form from "@shadcn/simplify/form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Badge } from "@shadcn/ui/badge";

interface LoginProps {
  role: "user" | "employee" | "admin";
}
const Login = ({ role }: LoginProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const validLogin = z.object({
    Email: z.string().email("Please enter a valid email"),
    Password: z
      .string()
      .min(2, "Password must be at least 8 characters long")
      .max(20, "Password must be at most 20 characters long"),
  });

  async function onLogin(data: z.infer<typeof validLogin>) {
    if (role === "user" || role === "admin") {
      const res = await http.Post("/login", data);
      if (res.ok) {
        navigate("/login", { replace: true });
      }
      console.log("login success: ", res);
    } else {
      const res = await http.Post("/login/employee", data);
      if (res.ok) {
        navigate("/login", { replace: true });
      }
      console.log("login success: ", res);
    }
  }
  // async function getUser() {
  //   const res = await http.Get("/users");
  //   console.log("users: ", res);
  //   toast({
  //     title: "Users",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(res.ok, null, 2)}</code>
  //       </pre>
  //     ),
  //     duration: 1000,
  //   });
  // }
  // async function onLogout() {
  //   const res = await http.Post("/logout", {});
  //   console.log("response: ", res);
  // }

  return (
    <div className="w-full h-screen bg-secondary flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl font-black text-primary mb-4">Horse Farm</h1>
      <Card className="flex flex-col w-3/4 max-w-sm relative">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-primary text-center ">
            Log in
          </CardTitle>
        </CardHeader>
        <CardContent>
          {role !== "user" ? (
            <Badge
              className={` absolute top-2 right-2   rounded-full   ${
                role === "admin"
                  ? "bg-sky-500 hover:bg-sky-500/80"
                  : "bg-amber-500 hover:bg-amber-500/80"
              }`}
            >
              {role}
            </Badge>
          ) : null}
          <Form
            className="flex flex-col gap-4"
            validator={validLogin}
            onValid={onLogin}
            onInvalid={(errorFields) => console.log(errorFields)}
            fields={({ form }) => (
              <>
                <Form.Input
                  useForm={form}
                  name="Email"
                  type="email"
                  placeholder="Email"
                />
                <Form.Input
                  useForm={form}
                  name="Password"
                  type="password"
                  placeholder="Password"
                />
                <Form.SubmitButton useForm={form}>Log in</Form.SubmitButton>
              </>
            )}
          />
        </CardContent>
      </Card>
      {/* <div className="flex gap-2 relative">
        <Button onClick={onLogin}>Login</Button>
        <Badge className=" bg-emerald-500 rounded-full absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2">
          admin
        </Badge>
      </div>
      <Button onClick={getUser}>Get Users</Button>
      <Button onClick={() => console.log("Cookie : ", document.cookie)}>
        Cookie
      </Button>
      <Button onClick={onLogout}>Logout</Button> */}
    </div>
  );
};

export default Login;
