import useUser from "./useUser"

export default function UserAvatar() {
    const { user, isLoading } = useUser()
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <img
                className="w-7 h-7 rounded-full object-cover object "
                src="/user.jpg"
                alt="user-Account" />
            <span >{user?.name}</span>
        </div>
    )
}