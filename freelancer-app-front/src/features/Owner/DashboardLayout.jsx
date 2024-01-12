import Loading from "../../UI/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

export default function DashboardLayout() {
    const { isLoading, projects } = useOwnerProjects()
    if(isLoading)return <Loading/>;
    return (
        <div>
            <DashboardHeader />
            <Stats projects={projects}/>
        </div>
    )
}