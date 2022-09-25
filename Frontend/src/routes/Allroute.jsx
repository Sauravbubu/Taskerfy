import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Project from "../pages/Project";
import Signup from "../pages/Signup";
import Tags from "../pages/Tags";
import User from "../pages/User";
import Privateroute from "../PrivateRoute/Privateroute";
import BookDemo from "../Sauravcomp/BookDemo";
import Main from "../Sauravcomp/Main";
import MainContent from "../Sauravcomp/MainContent";
import Task from "../Sauravcomp/Task";




const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/signup" element={<Signup/>}></Route>

       <Route path ="/" element = {<Home/>} ></Route>
      
       <Route path= "/app/bookdemo" element ={<BookDemo/>}></Route>
       <Route path="/app/user" element = {<User/>} ></Route>
       <Route path="/app/task" element = {<Task/>} ></Route>
       <Route path="/app/projects" element = {<Project/>} ></Route>
       <Route path="/app/tags" element = {<Tags/>} ></Route>

        <Route path="/" element={<Home />}></Route>
        <Route
          path="/app"
          element={
            <Privateroute>
              <Main/>
            </Privateroute>
          }
        ></Route>
    

      </Routes>
    </div>
  );
};

export default Allroute;
