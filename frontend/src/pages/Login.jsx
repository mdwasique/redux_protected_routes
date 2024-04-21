import { useDispatch } from "react-redux";
import { login } from "../rootReducer";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default Login;
