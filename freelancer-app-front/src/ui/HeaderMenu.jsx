import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-x-6 items-center">
      <li>
        <button onClick={() => navigate("/account")}>
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}
export default HeaderMenu;
