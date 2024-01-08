import Empty from "../../UI/Empty";
import Loading from "../../UI/Loading";
import tolocaldateshort from "../../utils/toLocalDateShort";
import { toPersianNumberWithcomma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import useOwnerProjects from "./useOwnerProjects"

export default function projectTable() {

    const { isLoading, projects } = useOwnerProjects();
    console.log(projects)
    //isloading =>loading
    //projects.lenght= 0 => empty ...
    if (isLoading) return <Loading />
    if (projects.length) return <Empty resourceName="پروژه" />
    return (
        <div className="bg-secondary-0 overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>دسته بندی </th>
                        <th>بودجه</th>
                        <th>ددلاین</th>
                        <th>تگ ها</th>
                        <th>فریلنسر</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project._id}>
                            <td>{index + 1}</td>
                            <td>{truncateText(project.title, 30)}</td>
                            <td>{project.category.title}</td>
                            <td>{toPersianNumberWithcomma(project.budget)}</td>
                            <td>{tolocaldateshort(project.deadline)}</td>
                            <td>
                                <div className="flex flex-wrap items-center gap-2 max-w[200px]">
                                    {project.tags.map((tag) => (<span className="badge badge--secondary" key={tag}>{tag}</span>))}
                                </div>
                            </td>

                            <td>{project.freelancer?.name || "-"}</td>
                            <td>{project.status === "open" ?
                                (<span className="badge badge--success ">باز</span>) :
                                (<span className="badge badge--danger">بسته</span>)}
                            </td>
                            <td>...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}