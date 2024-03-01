import Loading from "../UI/Loading";
import ProjectHeader from "../features/Project/ProjectHeader";
import ProposalTable from "../features/Project/ProposalTable";
import {useProject} from  "../features/Project/useProject"

export default function Project() {

    //fetch single project data 
    const { isLoading, data } = useProject();
    const { project } = data || {};


    if (isLoading) return <Loading />;

    return (
        <div>
            <ProjectHeader project={project} />
            <ProposalTable proposals={project.proposals} />
        </div>
    )
} 