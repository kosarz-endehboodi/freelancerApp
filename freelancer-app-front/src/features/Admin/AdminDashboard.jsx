import DashboardHeader from "../../UI/DashboardHeader";
import Loading from "../../UI/Loading";
import useProjects from "../../hooks/useProjects";
import useProposals from "../Proposal/useProposals";
import Stats from "./Satats";
import useUsers from "./useUsers";

export default function AdminDashboardLayout() {

    const { isLoading: isLoading1, proposals } = useProposals();
    const { isLoading: isLoading2, projects } = useProjects()
    const { isLoading: isLoading3, users } = useUsers()
    if (isLoading1 || isLoading2 || isLoading3) return <Loading />

    //user,project,proposals=>
    return (
        <div>
            <DashboardHeader />
            <Stats
             proposals={proposals.length} 
             users={users.length} 
             projects={projects.length} />
        </div>
    )
}
