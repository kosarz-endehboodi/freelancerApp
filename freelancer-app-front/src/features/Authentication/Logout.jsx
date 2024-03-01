import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../UI/Loading";

export default function logout() {

    const { isPending, logout } = useLogout()
    return isPending ? (<Loading />) : (
        <div className="w-5">
            <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-900" />
        </div>
        )

}