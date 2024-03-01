import Empty from "../../UI/Empty";
import Loading from "../../UI/Loading";
import useOwnerProjects from "./useOwnerProjects"
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
export default function projectTable() {

    const { isLoading, projects } = useOwnerProjects();
    // console.log(projects)
    //isloading =>loading
    //projects.lenght= 0 => empty ...
    if (isLoading) return <Loading />
    if (!projects.length) return <Empty resourceName="پروژه" />
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی </th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
            </Table.Header>
            <Table.Body>
                {projects.map((project, index) => (
                    <ProjectRow project={project} index={index} key={project._id} />
                ))}
            </Table.Body>

        </Table>
    )
}