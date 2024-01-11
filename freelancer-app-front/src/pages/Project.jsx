import useProject from "../features/Project/useProject";
import Loading from "../UI/Loading";
import ProjectHeader from "../features/Project/ProjectHeader";
import ProposalTable from "../features/Project/ProposalTable";

export default function project() {

    //fetch single project data 
    const { isLoading, data: project } = useProject()
    console.log(project)
    if (isLoading) return <Loading />;
    return (
        <div>
            <ProjectHeader project={project}/>
            <ProposalTable proposals={project.proposals}/>
        </div>
    )
} 