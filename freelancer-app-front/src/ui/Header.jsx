import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { data, isLoading } = useUser();
  const { user } = data || {};

  return (
    <div className="bg-secondary-0  border-b border-secondary-200 py-4 px-8">
      <div
        className={` 
      flex items-center gap-x-8 justify-end container xl:max-w-screen-lg transition-all duration-200 ${
        isLoading ? "blur-sm" : ""
      }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
