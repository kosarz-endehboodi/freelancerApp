import Loading from "../../UI/Loading";
import Stats from "./Stats";
import useProposals from "../Proposal/useProposals";
import DashboardHeader from "../../UI/DashboardHeader";

export default function DashboardLayout() {
    const { isLoading, proposals } = useProposals();
    if (isLoading) return (<Loading />);
    return (
        <div>
            <DashboardHeader />
            <Stats proposals={proposals} />
        </div>
    )
}