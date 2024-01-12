import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../UI/Modal"
import ChangeProposalStatus from "./ChangeProposalStatus";
const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: " تایید شده",
        className: "badge--success"
    }]


export default function ProposalRow({ proposal, index }) {


    const { user, status } = proposal;
    const [open, setOpen] = useState(false);
    return (

        <Table.Row className="flex-col justify-around p-4">

            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td><p>{truncateText(proposal.description, 50)}</p></td>
            <td>{proposal.duration} روز</td>
            <td>{proposal.price}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>
            <td>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="تغییر وضعیت درخواست"
                >
                    <ChangeProposalStatus
                        proposalId={proposal._id}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
                <button type="submit" onClick={() => setOpen(true)}>
                    تغییر وضعیت
                </button>
            </td>

        </Table.Row>

    )
}