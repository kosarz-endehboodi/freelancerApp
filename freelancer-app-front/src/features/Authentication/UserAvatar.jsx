import useUser from "./useUser"

export default function UserAvatar() {
    const { data } = useUser();
    const { user } = data || {};
   
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <img
                className="w-7 h-7 rounded-full object-cover object "
                src="/user.jpg"
                alt="user-account" />
            <span >{user?.name}</span>
        </div>
    )
}