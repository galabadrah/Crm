import { Routes, Route, } from "react-router-dom"
// pages
import Home from "./Home"
import User from "./User"
import Admin from "./Admin"
import PrivateRoute from "./routes/PrivateRoute"
import Nav from "./Nav"
// user
import Projects from "./user/Projects"
import Dashboard from "./user/Dashboard"
import UserDone from "./user/UserDone"
import Profile from "./user/UserProfile"
import UserExcel from "./user/UserExcel"
// admin
import AddTask from "./admin/AddTask"
import UserTasks from "./admin/components/UserTasks"
// contexts
import { UsersDataProvider } from "./context/user"
import { ProjectsProvider } from "./context/projects"
import All_Users from "./admin/All_Users"

function App() {

  return (
    <UsersDataProvider>
      <ProjectsProvider>
        <div className="min-h-screen h-full w-screen flex bg-dark-bg text-white shadow-slate-950 relative" >
          <Nav />
          <main className={`overflow-hidden max-sm:ml-0 ml-[80px] w-full z-0 relative h-screen overflow-y-auto`}>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
              <Route path="/Users" element={<PrivateRoute><All_Users /></PrivateRoute>} />
              <Route path="/userdone" element={<UserDone />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/userexcel" element={<UserExcel />} />
              <Route path="/usertasks" element={<UserTasks />} />
            </Routes>
          </main>

        </div>
      </ProjectsProvider>
    </UsersDataProvider>
  );
}

export default App;
