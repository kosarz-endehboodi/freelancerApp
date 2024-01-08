import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import tolocaldateshort from "../../utils/toLocalDateShort";
import { toPersianNumberWithcomma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ConfrimDelete from "../../UI/ConfrimDelete";
import useRemoveProject from "./useRemoveProject";



export default function projectRow({ project, index }) {
    const [isEditOpen, SetIsEditOpen] = useState(false)
    const [isDeleteOpen, setDeleteOpen] = useState(false)
    const { isDeleting, removeProject } = useRemoveProject();

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.categort}</td>
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
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button
                            onClick={() => SetIsEditOpen(true)}
                        >
                            <TbPencilMinus
                                className="w-5 h-5 text-primary-900" />
                        </button>
                        <Modal
                            onClose={() => SetIsEditOpen(false)}
                            title="modal title"
                            open={isEditOpen}>
                            this is modal...
                        </Modal>
                    </>

                    <>
                        <button
                            onClick={() => setDeleteOpen(true)}
                        >
                            <HiOutlineTrash className="w-5 h-5 text-error" />
                        </button>
                        <Modal
                            onClose={() => setDeleteOpen(false)}
                            title={`حذف  ${project.title}`}
                            open={isDeleteOpen}>
                            <ConfrimDelete
                                resourceName={project.title}
                                onclose={() => setDeleteOpen(false)}
                                onConfirm={() =>
                                    removeProject(project._id, {
                                      onSuccess: () => setDeleteOpen(false),
                                    })
                                  }
                                  disabled={isDeleting}

                            />
                        </Modal>
                    </>

                </div>
            </td>
        </Table.Row>

    )
}