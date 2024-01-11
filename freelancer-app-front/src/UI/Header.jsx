import useUser from "../features/Authentication/useUser"

export default function header() {
    const { data } = useUser();
    return (
        <div className="bg-secondary-0  border-b border-secondary-200 py-4 px-8">
        <div >
            app header
        </div>
        </div>
    )
}