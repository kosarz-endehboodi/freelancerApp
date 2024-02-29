
import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import { useState } from "react";
import Modal from "../../../UI/Modal"
import CreateProposal from "../../Proposal/CreateProposal";

import { toPersianNumberWithcomma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/trancateText";
import tolocaldateshort from "../../../utils/toLocalDateShort";

const ProjectStatus = {
    OPEN: {
        label: "باز",
        className: "badge--success",
    },
    CLOSED: {
        label: "بسته",
        className: "badge--danger",
    }
}



export default function ProjectRow({ project, index }) {

    const { status, title, deadline, budget } = project;
    const [open, setOpen] = useState(false)

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td><p>{truncateText(title, 30)}</p></td>
            <td>{toPersianNumberWithcomma(budget)}</td>
            <td>{tolocaldateshort(deadline)}</td>
            <td>{
                <span className={`badge ${ProjectStatus[status].className}`}>
                    {ProjectStatus[status].label}
                </span>
            }</td>
            <td>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={`درخواست انجام پروژه${title}`}
                >
                    <CreateProposal projectId={project._id} onClose={() => setOpen(false)} />
                </Modal>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className="w-5 h-5 text-primary-900" /></button>
            </td>

        </Table.Row>

    )
}
