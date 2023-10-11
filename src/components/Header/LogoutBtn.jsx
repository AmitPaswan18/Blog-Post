import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock md:px-6 px-2 py-2 duration-200 bg-red-500 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
