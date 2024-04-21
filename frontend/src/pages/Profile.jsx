import { useDispatch } from "react-redux";
import { logout } from "../rootReducer";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Profile</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
