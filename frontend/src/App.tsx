import { Button } from "@shadcn/ui/button";
import React from "react";

function App() {
  return (
    <div className="App w-full h-screen bg-slate-700 flex justify-center items-center">
      <div className=" w-[600px] h-80 border-white border-2 rounded-md bg-orange-300 text-center flex flex-col gap-2">
        <h1 className=" font-bold text-rose-500 text-6xl hover:text-yellow-300 transition-colors duration-150 ">
          Login
        </h1>
        <input className=" "></input>
        <input></input>
        <div>
          <Button className=" bg-indigo-500 hover:bg-indigo-700 rounded-none hover:rounded-lg transition-all duration-500">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
