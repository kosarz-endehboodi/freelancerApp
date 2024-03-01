import Empty from "../../../UI/Empty";
import Loading from "../../../UI/Loading";
import useProjects from "../../../hooks/useProjects";
import Table from "../../../ui/Table";
import Projectrow from "./ProjectRow";

export default function ProjectTable() {

    const { isLoading, projects } = useProjects();
    // console.log(projects)
    //isloading =>loading
    //projects.lenght= 0 => empty ...
    if (isLoading) return <Loading />
    if (!projects.length) return <Empty resourceName="پروژه ای" />
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {projects.map((project, index) => (
                    <Projectrow project={project} index={index} key={project._id} />
                ))}
            </Table.Body>

        </Table>
    )
}