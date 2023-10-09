import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import AddQuiz from "./Pages/Admin/AddQuiz/AddQuiz";
import Admin from "./Pages/Admin/Admin/Admin";
import AdminRoute from "./Pages/Admin/AdminRoute/AdminRoute";
import AppointAdmin from "./Pages/Admin/AppointAdmin/AppointAdmin";
import ManageUser from "./Pages/Admin/ManageUser/ManageUser";
import QuizPerformance from "./Pages/Admin/QuizPerformance/QuizPerformance";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Nav from "./Pages/Shared/Nav/Nav";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<Admin />}>
              <Route
                path='appointAdmin'
                element={
                  <AdminRoute>
                    <AppointAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path='addQuiz'
                element={
                  <AdminRoute>
                    <AddQuiz />
                  </AdminRoute>
                }
              />
              <Route
                path='quizPerformance'
                element={
                  <AdminRoute>
                    <QuizPerformance />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path='/result' element={<Result />} />
            <Route
              path='/quiz'
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
