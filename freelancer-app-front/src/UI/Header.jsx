import useUser from "../features/Authentication/useUser"
import UserAvatar from "../features/Authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
export default function header() {
    const { isLoading } = useUser();
    return (
        <div className="bg-secondary-0  border-b border-secondary-200 py-4 px-8">
            <div className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
            ${isLoading ? "blur_sm opacity-50" : ""}
            `}>

                <UserAvatar />
                <HeaderMenu />
            </div>
        </div>
    )
}