import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyBlog from "./pages/MyBlog";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import Register from "./pages/Register";

const App = () => {
  const { user } = useSelector((state) => state.userReducer);

  const isAuthenticated = Boolean(user);
  const isAdmin = user?.role === "admin";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes for not logged-in users */}
        <Route element={<ProtectedRoute isAuthenticated={!isAuthenticated} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Routes for logged-in users */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>

        {/* Routes for admin only */}
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && isAdmin}
              adminOnly={true}
              admin={isAdmin}
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
